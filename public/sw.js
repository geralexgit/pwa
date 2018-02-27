self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing service worker', event);
    event.waitUntil(
        caches.open('static')
        .then(function (cache) {
            console.log('[Service Worker] Precaching App Shell');
            cache.add('/src/js/app.js');
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating service worker', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    // console.log('[Service Worker] fetch triggered', event);
    event.respondWith(fetch(event.request));
});