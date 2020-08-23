self.addEventListener("fetch", function(e) {
    if (/^https:\/\/cdn\.jsdelivr\.net\/gh\/rundocs\/jekyll-rtd-theme@.+/.exec(e.request.url)) {
        e.respondWith(
            caches.match(e.request).then(function(resp) {
                if (resp !== undefined) {
                    return resp;
                } else {
                    return fetch(e.request, { cache: "no-store" }).then(function(resp) {
                        let clone = resp.clone();
                        caches.open("sw").then(function(cache) {
                            cache.put(e.request, clone);
                        });
                        return resp;
                    }).catch(console.log);
                }
            })
        );
    }
});