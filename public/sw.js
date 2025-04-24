var CACHE = 'iqbalperkasa-com-cache';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => {
    return cache.addAll([
      '/',
      // '/style.css',
    ]);
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fromCache(event.request));

  event.waitUntil(update(event.request).then(refresh));
});

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request);
  });
};

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone()).then(() => {
        return response;
      });
    });
  });
};

function refresh(response) {
  return self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      var message = {
        type: 'refresh',
        url: response.url,
        eTag: response.headers.get('ETag'),
      };

      client.postMessage(JSON.stringify(message));
    });
  });
};
