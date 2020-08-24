self.addEventListener("activate", function(event) {
    let cacheWhitelist = ["rundocs-{{ version }}"];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener("fetch", function(e) {
    if (/^https:\/\/cdn\.jsdelivr\.net\/gh\/rundocs\/jekyll-rtd-theme@.+/.exec(e.request.url)) {
        e.respondWith(
            caches.match(e.request).then(function(resp) {
                if (resp !== undefined) {
                    return resp;
                } else {
                    return fetch(e.request, { cache: "no-store" }).then(function(resp) {
                        let clone = resp.clone();
                        caches.open("rundocs-{{ version }}").then(function(cache) {
                            cache.put(e.request, clone);
                        });
                        return resp;
                    }).catch(console.log);
                }
            })
        );
    }
});