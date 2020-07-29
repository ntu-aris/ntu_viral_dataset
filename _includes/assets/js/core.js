function search(data) {
    let text = new URL(location.href).searchParams.get("q");
    let results = [];
    for (page of data) {
        let [title, content] = [null, null];
        try {
            if (page.title) {
                page.title = $("<div/>").html(page.title).text();
                title = page.title.match(text);
            } else {
                if (page.url == "/") {
                    page.title = "{{ site.title }}";
                } else {
                    page.title = page.url;
                }
            }
        } catch (e) {}
        try {
            if (page.content) {
                page.content = $("<div/>").html(page.content).text();
                content = page.content.match(text);
            }
        } catch (e) {}

        if (title || content) {
            let result = [`<a href="{{ site.baseurl }}${page.url}">${page.title}</a>`];
            if (content) {
                let min = content.index - 100;
                let max = content.index + 100;
                if (min < 0) {
                    min = 0;
                }
                if (max > page.content.length) {
                    max = page.content.length;
                }
                result.push(`<p class="context">${page.content.slice(min, max)}</p>`);
            }
            results.push(`<li>${result.join("")}</li>`);
        }
    }
    if (results.length > 0 && text.length > 0) {
        $("#search-results").html(`<ul class="search">${results.join("")}</ul>`);
    } else {
        $("#search-results").html("{{ __no_results_found }}");
    }
    $("#rtd-search-form [name='q']").val(text);
}

function reset() {
    const link = $(".wy-menu-vertical").find(`[href="${location.pathname}"]`);
    if (link.length > 0) {
        $(".wy-menu-vertical .current").removeClass("current");
        link.addClass("current");
        link.closest("li.toctree-l1").parent().addClass("current");
        link.closest("li.toctree-l1").addClass("current");
        link.closest("li.toctree-l2").addClass("current");
        link.closest("li.toctree-l3").addClass("current");
        link.closest("li.toctree-l4").addClass("current");
        link.closest("li.toctree-l5").addClass("current");
    }
}

function admonition() {
    const items = {
        note: "{{ __note }}",
        tip: "{{ __tip }}",
        warning: "{{ __warning }}",
        danger: "{{ __danger }}"
    };
    for (let item in items) {
        let content = $(`.language-${item}`).html();
        $(`.language-${item}`).replaceWith(`<div class="admonition ${item}"><p class="admonition-title">${items[item]}</p><p>${content}</p></div>`);
    }
}

$(document).ready(function() {
    if (location.pathname == "{{ site.baseurl }}/search.html") {
        $.getJSON("{{ site.baseurl }}/data.json", search);
    }
    admonition();
    anchors.add();
    SphinxRtdTheme.Navigation.reset = reset;
    SphinxRtdTheme.Navigation.enable(true);
});