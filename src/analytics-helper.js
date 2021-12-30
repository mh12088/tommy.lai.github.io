let gaConfig = {
  measurementId: '',
  apiSecret: '',
};
let clientId;
let env;

const sendAnalyticsEvent = (event, window) => {
  const isSend = true;
  if (event && isSend) {
    const request = event.request;
    console.log(request.url);
    // window.cookieStore.get("_ga").then(resp => {
    //   console.log(resp);
    // })
    caches.match(request.url).then(function (response) {
      if (response) {
        console.log('Found response in cache:', response);
        send('pwa_fetch_from_cache', { url: request.url }, window);
        console.log("-----From cache:", request.url)
      } else {
        send('pwa_fetch_from_network', { url: request.url }, window);
        // console.log("-----From network:", request.url)
        console.log('No response found in cache. About to fetch from network...');
      };
    });
  };
}

const send = (eventName, eventValue, window) => {
  const decodedGaConfig = getDecodedGaConfig(window);
  console.log('Sending analytics event');
  console.log(decodedGaConfig);
  return fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${decodedGaConfig.measurementId}&api_secret=${decodedGaConfig.apiSecret}`, {
    method: "POST",
    body: JSON.stringify({
      "client_id": clientId,
      "user_id": clientId,
      "events": [{
        "name": eventName,
        "params": {
          "request_url": eventValue.url
        }
      }]
    })
  });
};

const getGaConfig = (origin) => {
  const localList = ['localhost', '127.0.0.1'];
  const prodList = ['mh12088.github.io'];
  // Hardcode on frontend, should get from server
  const config = {
    localhost: {
      measurementId: "Ry1URko5SDJXNVEz",
      apiSecret: "UExkM1VlaldRemlSRkN2enF5VG9pQQ=="
    },
    prod: {
      measurementId: "Ry1URko5SDJXNVEz",
      apiSecret: "UExkM1VlaldRemlSRkN2enF5VG9pQQ=="
    }
  };

  console.log(origin);

  if (localList.find(item => origin.indexOf(item) !== -1)) {
    env = "localhost";
  } else if (prodList.find(item => origin.indexOf(item) !== -1)) {
    env = "prod";
  }
  console.log(env)
  if (env) {
    gaConfig.measurementId = config[env].measurementId;
    gaConfig.apiSecret = config[env].apiSecret;
    clientId = generateUUIDV4();
  } else {
    console.log("env is not found");
  }
}

const getDecodedGaConfig = (window) => {
  return {
    measurementId: window.atob(gaConfig.measurementId),
    apiSecret: window.atob(gaConfig.apiSecret)
  };
}

const generateUUIDV4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
