self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response !== undefined) {
                return response;
            } else {
                return fetch(event.request).then(function(response) {
                    let resp = response.clone();
                    caches.open("sw").then(function(cache) {
                        cache.put(event.request, resp);
                    });
                    return response;
                }).catch(debug);
            }
        })
    );
});