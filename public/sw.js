self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('airhorner').then((cache) => {
    return cache.addAll([
      '/',
      '/style.css',
    ]);
  }));
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
