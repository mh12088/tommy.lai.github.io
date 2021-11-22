importScripts('./ngsw-worker.js');
importScripts('./analytics-helper.js');

// my new features
self.addEventListener('fetch', (event) => {
    console.log('fetch');
    const req = event.request;
    const scopeUrl = this.scope.registration.scope;
    const requestUrlObj = this.adapter.parseUrl(req.url, scopeUrl);

    sendAnalyticsEvent('callAPI', 'PWA', `${requestUrlObj.origin}${requestUrlObj.path}${search}`);

    if (req.headers.has('ngsw-bypass') || /[?&]ngsw-bypass(?:[=&]|$)/i.test(requestUrlObj.search)) {
        return;
    }
    // The only thing that is served unconditionally is the debug page.
    if (requestUrlObj.path === '/ngsw/state') {
        // Allow the debugger to handle the request, but don't affect SW state in any other way.
        event.respondWith(this.debugger.handleFetch(req));
        return;
    }
    // If the SW is in a broken state where it's not safe to handle requests at all,
    // returning causes the request to fall back on the network. This is preferred over
    // `respondWith(fetch(req))` because the latter still shows in DevTools that the
    // request was handled by the SW.
    if (this.state === DriverReadyState.SAFE_MODE) {
        // Even though the worker is in safe mode, idle tasks still need to happen so
        // things like update checks, etc. can take place.
        event.waitUntil(this.idle.trigger());
        return;
    }
    // Although "passive mixed content" (like images) only produces a warning without a
    // ServiceWorker, fetching it via a ServiceWorker results in an error. Let such requests be
    // handled by the browser, since handling with the ServiceWorker would fail anyway.
    // See https://github.com/angular/angular/issues/23012#issuecomment-376430187 for more details.
    if (requestUrlObj.origin.startsWith('http:') && scopeUrl.startsWith('https:')) {
        // Still, log the incident for debugging purposes.
        this.debugger.log(`Ignoring passive mixed content request: Driver.fetch(${req.url})`);
        return;
    }
    // When opening DevTools in Chrome, a request is made for the current URL (and possibly related
    // resources, e.g. scripts) with `cache: 'only-if-cached'` and `mode: 'no-cors'`. These request
    // will eventually fail, because `only-if-cached` is only allowed to be used with
    // `mode: 'same-origin'`.
    // This is likely a bug in Chrome DevTools. Avoid handling such requests.
    // (See also https://github.com/angular/angular/issues/22362.)
    // TODO(gkalpak): Remove once no longer necessary (i.e. fixed in Chrome DevTools).
    if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') {
        // Log the incident only the first time it happens, to avoid spamming the logs.
        if (!this.loggedInvalidOnlyIfCachedRequest) {
            this.loggedInvalidOnlyIfCachedRequest = true;
            this.debugger.log(`Ignoring invalid request: 'only-if-cached' can be set only with 'same-origin' mode`, `Driver.fetch(${req.url}, cache: ${req.cache}, mode: ${req.mode})`);
        }
        return;
    }
    // Past this point, the SW commits to handling the request itself. This could still
    // fail (and result in `state` being set to `SAFE_MODE`), but even in that case the
    // SW will still deliver a response.
    event.respondWith(this.handleFetch(event));
});