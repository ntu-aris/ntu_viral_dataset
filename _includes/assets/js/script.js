function search(data) {
    let text = new URL(location.href).searchParams.get("q");
    let results = [];
    for (item of data) {
        let [caption, context] = [item.title.match(text), item.content.match(text)];
        if (caption || context) {
            let result = [`<a href="${item.url}">${item.title}</a>`];
            if (context) {
                let min = context.index - 50;
                let max = context.index + 50;
                if (min < 0) {
                    min = 0;
                }
                if (max > item.content.length) {
                    max = item.content.length;
                }
                result.push(`<p class="context">${item.content.slice(min, max)}</p>`);
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
    SphinxRtdTheme.Navigation.reset = reset;
    SphinxRtdTheme.Navigation.enable(true);
});