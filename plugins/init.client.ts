
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hookOnce("page:finish", () => {
    console.log("page finished hook")
});

nuxtApp.hooks.hookOnce("app:beforeMount", () => {
    console.log("beforeMount")
    registerServiceWorker()
  });
});
