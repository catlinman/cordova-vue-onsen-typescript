
// Import OnsenUI stylesheets.
import "onsenui/css/onsen-css-components.css";
import "onsenui/css/onsenui.css";

// Import our core Vue module as well as our custom router.
import Vue from "vue";
import VueOnsen from "vue-onsenui";

// Import our custom router.
import router from "./scripts/router";

// Bind OnsenUI to Vue.
Vue.use(VueOnsen);

// Import the main application template.
import App from "./app.vue";

// Create a new Vue instance and specificy its entry point.
// We bind it to window.App to make it accessible under Webpack for debugging.
(window as any).App = new Vue({
    el: "#app",
    render: (h) => h(App, {}),
    router,
});
