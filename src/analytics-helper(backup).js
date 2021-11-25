const measurementId = `G-TFJ9H2W5Q3`;
const apiSecret = `PLd3UejWQziRFCvzqyToiA`;
// const measurementId = `G-WG3DE9SEBK`;
// const apiSecret = `ox2CicStRTCDcJEc_snDDg`;

const sendAnalyticsEvent = (event) => {
    if (event) {
        const request = event.request;
        caches.match(request).then(function (response) {
            if (response) {
                console.log('Found response in cache:', response);
                send('pwa_fetch_from_cache', { url: request.url });
                return response;
            };
            console.log('No response found in cache. About to fetch from network...');
            return fetch(request).then(function (response) {
                console.log('Response from network is:', response);
                send('pwa_fetch_from_network', { request_url: request.url });
                return response;
            }).catch(function (error) {
                console.error('Fetching failed:', error);
                throw error;
            });
        });
    };
}

const send = (eventName, eventValue) => {
    console.log('Sending analytics event');
    console.log(eventValue.url)
    return fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "client_id",
            "events": [{
                "name": eventName,
                "params": {
                    "request_url": eventValue.url,
                }
            }]
        })
    });
};