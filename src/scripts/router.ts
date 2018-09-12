
// Import core Vue modules.
import Vue from "vue";
import Router from "vue-router";

// Import our new route templates.
import Home from "../components/home.vue";
import Navigation from "../components/navigation.vue";
import NavigationChild from "../components/navigation-child.vue";
import Events from "../components/events.vue";

// Make Vue switch to the router.
Vue.use(Router);

// Main router logic.
const router = new Router({
    base: __dirname,
    mode: "history",
    routes: [
        {
            component: Home,
            name: "home",
            path: "/",
        },

        {
            children: [
                {
                    component: NavigationChild,
                    name: "navigation-child",
                    path: "/navigation/child",
                },
            ],

            component: Navigation,
            name: "navigation",
            path: "/navigation",
        },

        {
            component: Events,
            name: "events",
            path: "/events",
        },
    ],
});

// Export our router object for use in the main application component.
export default router;
