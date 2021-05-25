self.addEventListener('install', (ev) => {
  console.log('[sw] install');

  const cacheName = 'iqbalperkasacomcache';
  const filesToCache = [
    '/',
    '/index.html',
    '/index.93b971d5.css',
    '/index.93b971d5.css.map',
  ];

  ev.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[sw] caching files');
    await cache.addAll(filesToCache);
  })());
});

self.addEventListener('fetch', (ev) => {
  console.log('ev', ev);
  console.log('ev.request', ev.request);
  ev.respondWith((async () => {
    const storedCache = await caches.match(ev.request);
  })());
});
