if (navigator.serviceWorker) {
  navigator.serviceWorker.register(new URL('./sw.js', import.meta.url));
};
