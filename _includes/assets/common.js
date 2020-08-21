$(document).ready(function() {
    let analytics = new URL("https://rundocs-analytics.glitch.me/collect?v={{ version }}&lang={{ lang }}");
    let highlight = new URL(location.href).searchParams.get("highlight");

    /* content toc */
    $(".wy-menu-vertical li.current").append(function() {
        let level = parseInt($(this).attr("class").match(/toctree-l(\d)/)[1]) + 1;
        let toc = ["<ul>"];

        $(".document").find("h2,h3,h4,h5,h6").each(function() {
            toc.push(`<li class="toctree-l${level}"><a class="reference internal" href="#${this.id}">${$(this).html()}</a></li>`);
        });
        toc.push("</ul>");
        /* return is apend */
        if (toc.length == 2) {
            return "";
        } else {
            return toc.join("");
        }
    });

    SphinxRtdTheme.Navigation.reset = function() {
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
    };
    SphinxRtdTheme.Navigation.enable(true);

    if (highlight) {
        $(".section").find("*").each(function() {
            try {
                if (this.outerHTML.match(new RegExp(highlight, "im"))) {
                    $(this).addClass("highlighted-box");
                }
            } catch (e) {
                feedback(["highlight", e.message]);
            }
        });
        $(".section").find(".highlighted-box").each(function() {
            if (($(this).find(".highlighted-box").length > 0)) {
                $(this).removeClass("highlighted-box");
            }
        });
    }
    $(".admonition-title").each(function() {
        $(this).html(ui.admonition[$(this).attr("ui")]);
    });
    anchors.add();

    analytics.searchParams.append("user_lang", navigator.language);
    analytics.searchParams.append("host", location.host);
    analytics.searchParams.append("platform", navigator.platform);
    $.getJSON(analytics.toString(), (data) => $("#counter").html(data.count));
});