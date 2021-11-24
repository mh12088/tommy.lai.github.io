const measurementId = `G-TFJ9H2W5Q3`;
const apiSecret = `PLd3UejWQziRFCvzqyToiA`;
// const measurementId = `G-WG3DE9SEBK`;
// const apiSecret = `ox2CicStRTCDcJEc_snDDg`;

const sendAnalyticsEvent = (eventName, eventValue) => {

  console.log('Sending analytics event');
  console.log(eventValue.url)
  return fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
    method: "POST",
    body: JSON.stringify({
      "client_id": "client_id",
      "events": [{
        "name": eventName,
        "params": {
          "url": eventValue.url,
        }
      }]
    })
  });
};

// This file is for pwa on service worker send event to ga4