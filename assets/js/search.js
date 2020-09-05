function search(data) {
    let text = new URL(location.href).searchParams.get("q");
    let lang = new URL(location.href).searchParams.get("lang") || ui.lang;

    $("input[name='q']").val(text);
    $("input[name='q']").attr("placeholder", i18n[lang].search_docs + "...");

    let results = [];
    let regexp = new RegExp();
    try {
        regexp = new RegExp(text, "im");
    } catch (e) {
        $(".search").empty();
        $(".search-summary").html(i18n[lang].search_results_not_found);
        $("#search-results h2").html(i18n[lang].search_results);
        return debug(e.message);
    }

    function slice(content, min, max) {
        return content.slice(min, max).replace(regexp, (match) => `<span class="highlighted">${match}</span>`);
    }
    for (page of data) {
        let [title, content] = [null, null];
        try {
            if (page.title) {
                title = page.title.match(regexp);
            } else {
                if (page.url == "/") {
                    page.title = ui.title;
                } else {
                    page.title = page.url;
                }
            }
        } catch (e) {
            debug(e.message);
        }
        try {
            if (page.content) {
                page.content = $("<div/>").html(page.content).text();
                content = page.content.match(regexp);
            }
        } catch (e) {
            debug(e.message);
        }
        if (title || content) {
            let result = [`<a href="${ui.baseurl}${page.url}?highlight=${text}">${page.title}</a>`];
            if (content) {
                let [min, max] = [content.index - 100, content.index + 100];
                let [prefix, suffix] = ["...", "..."];

                if (min < 0) {
                    prefix = "";
                    min = 0;
                }
                if (max > page.content.length) {
                    suffix = "";
                    max = page.content.length;
                }
                result.push(`<p class="context">${prefix}${slice(page.content ,min, max)}${suffix}</p>`);
            }
            results.push(`<li>${result.join("")}</li>`);
        }
    }
    if (results.length > 0 && text.length > 0) {
        $(".search").html(results.join(""));
        $(".search-summary").html(i18n[lang].search_results_found.replace("#", results.length));
    } else {
        $(".search").empty();
        $(".search-summary").html(i18n[lang].search_results_not_found);
    }
    $("#search-results h2").html(i18n[lang].search_results);
}

$(document).ready(function() {
    $.ajax(`${ui.baseurl}/pages.json`).done(search).fail((xhr, message) => debug(message));
});