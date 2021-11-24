importScripts('./analytics-helper.js');

// Custom Service For send analytics event to GA Service
self.addEventListener('fetch', (event) => {
    // console.log('Fetch', event);
    // console.log("This is custom service worker", req);
    // sendAnalyticsEvent('pwa_on_fetch', { url: req.url });
    const req = event.request;
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('Found response in cache:', response);
                sendAnalyticsEvent('pwa_fetch_from_cache', { url: req.url });
                return response;
            }
            console.log('No response found in cache. About to fetch from network...');

            return fetch(event.request).then(function (response) {
                console.log('Response from network is:', response);
                sendAnalyticsEvent('pwa_fetch_from_network', { url: event.request.url });
                return response;
            }).catch(function (error) {
                console.error('Fetching failed:', error);

                throw error;
            });
        })
    );
});

importScripts('./ngsw-worker.js');