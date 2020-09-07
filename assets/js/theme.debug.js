$(document).ready(function() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register(`${ui.baseurl}/sw.caches.js`);
    } else {
        debug("Service Worker not supported!");
    }

    function debug() {
        console.debug.apply(console, arguments);
    }
    let analytics = new URL(`https://rundocs-analytics.glitch.me/collect?v=${ui.version}&lang=${ui.lang}`);
    analytics.searchParams.append("user_lang", navigator.language);
    analytics.searchParams.append("host", location.host);
    analytics.searchParams.append("platform", navigator.platform);
    $.getJSON(analytics.toString(), (data) => $("#counter").html(data.count));

    function initialize(name) {
        let link = $(".toc").find(`[href="${decodeURI(name)}"]`);
        if (link.length > 0) {
            $(".toc .current").removeClass("current");
            link.addClass("current");
            link.closest(".tree-1").parent().addClass("current");
            for (let i = 1; i <= 20; i++) {
                link.closest(`.tree-${i}`).addClass("current");
            }
            /* need debug */
            $(".toc a").children("span").html(`<i class="far fa-plus-square"></i>`)
            $(".toc a.current").children("span").html(`<i class="far fa-minus-square"></i>`);
        }
    }

    function toggleCurrent(link) {
        let closest = link.closest("li");
        closest.siblings("li.current").removeClass("current");
        closest.siblings().find("li.current").removeClass("current");
        closest.find("> ul li.current").removeClass("current");
        closest.toggleClass("current");
    }

    function toc() {
        $(".toc li.current").append('<ul class="content-toc"></ul>').html(function() {
            let level = parseInt(this.dataset.level);
            let temp = 0;
            let stack = [$(this).find(".content-toc")];

            $(".markdown-body").find("h2,h3,h4,h5,h6").each(function() {
                let anchor = $("<a/>").addClass("reference internal").text($(this).text()).attr("href", `#${this.id}`);
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

                $("<li/>").addClass(`tree-${level + tagLevel}`).append(anchor).appendTo(stack[0]);
            });
            if (!stack[0].html()) {
                stack[0].remove();
            }
        });
    }

    function set(name, value) {
        return localStorage.setItem(name, value);
    }

    function get(name) {
        return localStorage.getItem(name) || false;
    }

    function restore() {
        let scroll = get("scroll");
        let scrollTime = get("scrollTime");
        let scrollHost = get("scrollHost");

        if (scroll && scrollTime && scrollHost) {
            if (scrollHost == location.host && (Date.now() - scrollTime < 6e5)) {
                $(".wy-side-scroll").scrollTop(scroll);
            }
        }
        $(".sidebar").scroll(function() {
            set("scroll", this.scrollTop);
            set("scrollTime", Date.now());
            set("scrollHost", location.host);
        });
    }

    function highlight() {
        let text = new URL(location.href).searchParams.get("highlight");
        let box = ".highlighted-box";

        if (text) {
            $(".markdown-body").find("*").each(function() {
                try {
                    if (this.outerHTML.match(new RegExp(text, "im"))) {
                        $(this).addClass("highlighted-box");
                    }
                } catch (e) {
                    debug(e.message);
                }
            });
            $(".markdown-body").find(box).each(function() {
                if (($(this).find(box).length > 0)) {
                    $(this).removeClass(box);
                }
            });
        }
    }

    anchors.add();
    toc();
    initialize(location.pathname);
    restore();
    highlight();

    /* nested ul */
    $(".toc ul").siblings("a").each(function() {
        let link = $(this);
        let expand = $('<span class="toctree-expand"><i class="far fa-plus-square"></i></span>');

        expand.on("click", function(e) {
            e.stopPropagation();
            toggleCurrent(link);
            return false;
        });
        link.prepend(expand);
    });

    /* admonition */
    $(".admonition-title").each(function() {
        $(this).children(".progress").replaceWith(ui.admonition[$(this).attr("ui")]);
    });

    /* bind */
    $(document).on("click", '[data-toggle="wy-nav-top"]', function() {
        $('[data-toggle="wy-nav-shift"]').toggleClass("shift");
        $('[data-toggle="rst-versions"]').toggleClass("shift");
    });
    $(document).on("click", ".wy-menu-vertical .current ul li a", function() {
        $('[data-toggle="wy-nav-shift"]').removeClass("shift");
        $('[data-toggle="rst-versions"]').toggleClass("shift");
        toggleCurrent($(this));
    });
    $(document).on("scroll", function() {
        let start = $(this).scrollTop() + 5;
        let items = [];

        $(".markdown-body").find("h1,h2,h3,h4,h5,h6").each(function() {
            items.push({
                offset: $(this).offset().top,
                id: this.id,
                level: parseInt(this.tagName.slice(1))
            });
        });
        for (let i = 0; i < items.length; i++) {
            if (start > items[i].offset) {
                if (i < items.length - 1) {
                    if (start < items[i + 1].offset) {
                        if (items[i].level == 1) {
                            initialize(location.pathname);
                        } else {
                            initialize("#" + items[i].id);
                        }
                    }
                } else {
                    initialize("#" + items[i].id);
                }
            }
        }
    });
    // $(document).on("click", '[data-toggle="rst-current-version"]', function() {
    //     $('[data-toggle="rst-versions"]').toggleClass("shift-up");
    // });


    $("#toggle").click(function() {
        $(".sidebar-wrap,.content-wrap,.addons").toggleClass("shift");
    });
    $(".status").click(function() {
        $(".details").toggleClass("d-none");
    });

    $(window).bind("resize", function() {
        requestAnimationFrame(function() {});
    });
    $(window).bind("hashchange", () => initialize(location.hash || location.pathname));
});