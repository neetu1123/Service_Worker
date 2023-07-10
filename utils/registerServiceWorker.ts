import { register } from 'register-service-worker';

export function registerServiceWorker() {
    console.log("just called")
    register("/sw.js", {
        registered(registration) {
         console.log({registration}, "registerd")
        },
        updated() {
          // Add a custom event and dispatch it.
          // Used to display of a 'refresh' banner following a service worker update.
          document.dispatchEvent(new CustomEvent("swUpdated"));
        },
        error(e) {
          // Add a custom event and dispatch it.
          // Used to run task which are dependent upon service worker.
          document.dispatchEvent(new CustomEvent("swFailed"));
          console.log({e})
        },
        registrationOptions: {
          scope: "/",
        },
      });
}