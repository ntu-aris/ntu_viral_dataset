$(document).ready(function() {
    function set(name, value) {
        return localStorage.setItem(name, value);
    }

    function get(name) {
        return localStorage.getItem(name) || false;
    }

    /* anchors */
    anchors.add();

    /* generate content TOC (id from anchors) */
    $(".wy-menu-vertical li.current").append('<ul class="content-toc"></ul>').html(function() {
        let level = parseInt(this.dataset.level);
        let temp = 0;
        let stack = [$(this).find(".content-toc")];

        $(".document").find("h2,h3,h4,h5,h6").each(function() {
            let anchor = $("<a/>").addClass("reference internal").text($(this).text()).attr("href", `#${this.id}`);
            let heading = $(this);
            let tagLevel = parseInt(this.tagName.slice(1)) - 1;

            if (tagLevel > temp) {
                let parent = stack[0].children("li:last")[0];
                if (parent) {
                    stack.unshift($("<ul/>").appendTo(parent));
                }
            } else {
                stack.splice(0, Math.min(temp - tagLevel, Math.max(stack.length - 1, 0)));
            }
            temp = tagLevel;

            $("<li/>").addClass(`toctree-l${level + tagLevel}`).append(anchor).appendTo(stack[0]);
        });
        /* if TOC is empty remove ul */
        if (!stack[0].html()) {
            stack[0].remove();
        }
    });

    /* display current file in TOC */
    let link = $(".wy-menu-vertical").find(`[href="${location.pathname}"]`);
    if (link.length > 0) {
        link.closest("li.toctree-l1").parent().addClass("current");
        link.closest("li.toctree-l1").addClass("current");
        link.closest("li.toctree-l2").addClass("current");
        link.closest("li.toctree-l3").addClass("current");
        link.closest("li.toctree-l4").addClass("current");
        link.closest("li.toctree-l5").addClass("current");
    }

    /* restore sidebar scroll within 10 minutes */
    let scroll = get("scroll");
    let scrollTime = get("scrollTime");
    let scrollHost = get("scrollHost");

    if (scroll && scrollTime && scrollHost) {
        if (scrollHost == location.host && (Date.now() - scrollTime < 6e5)) {
            $(".wy-side-scroll").scrollTop(scroll);
        }
    }
    $(".wy-side-scroll").scroll(function() {
        set("scroll", this.scrollTop);
        set("scrollTime", Date.now());
        set("scrollHost", location.host);
    });

    /* native nav */
    SphinxRtdTheme.Navigation.enable(true);

    /* search highlight */
    let highlight = new URL(location.href).searchParams.get("highlight");
    if (highlight) {
        $(".section").find("*").each(function() {
            try {
                if (this.outerHTML.match(new RegExp(highlight, "im"))) {
                    $(this).addClass("highlighted-box");
                }
            } catch (e) {
                debug(e.message);
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
});