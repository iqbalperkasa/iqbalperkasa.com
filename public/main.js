// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(() => {
//     console.log("✅");
//   });
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}
