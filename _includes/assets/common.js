$(document).ready(function() {
    let analytics = new URL("https://rundocs-analytics.glitch.me/collect?v={{ version }}&lang={{ lang }}");
    let highlight = new URL(location.href).searchParams.get("highlight");
    let current = $(".wy-menu-vertical").find(`[href="${location.pathname}"]`);

    /* directory toc */
    if (current.length > 0) {
        current.closest("li.toctree-l1").parent().addClass("current");
        current.closest("li.toctree-l1").addClass("current");
        current.closest("li.toctree-l2").addClass("current");
        current.closest("li.toctree-l3").addClass("current");
        current.closest("li.toctree-l4").addClass("current");
        current.closest("li.toctree-l5").addClass("current");
        current[0].scrollIntoView();
    }
    /* content toc */
    $(".wy-menu-vertical li.current").append(function() {
        let level = parseInt($(this).attr("class").match(/toctree-l(\d+)/)[1]) + 1;
        let toc = ["<ul>"];
        let sort = parseInt(this.dataset.sort);

        $(".document").find("h2,h3,h4,h5,h6").each(function() {
            toc.push(`<li class="toctree-l${level}"><a class="reference internal" href="#${this.id}">${$(this).text()}</a></li>`);
        });
        toc.push("</ul>");
        /* return is apend */
        if (toc.length == 2) {
            return "";
        } else {
            return toc.join("");
        }
    });
    /* native nav */
    SphinxRtdTheme.Navigation.enable(true);

    /* search highlight */
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
    /* admonition */
    $(".admonition-title").each(function() {
        $(this).html(ui.admonition[$(this).attr("ui")]);
    });
    /* anchors */
    anchors.add();

    /* analytics */
    analytics.searchParams.append("user_lang", navigator.language);
    analytics.searchParams.append("host", location.host);
    analytics.searchParams.append("platform", navigator.platform);
    $.getJSON(analytics.toString(), (data) => $("#counter").html(data.count));
});