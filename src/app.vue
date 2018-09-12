
<template>
<!-- Splitter element that shows up above everything else. -->
<v-ons-splitter>
    <v-ons-splitter-side class="menu" swipeable width="210px" collapse="" side="left" :open.sync="showMenu">
        <v-ons-page>
            <!-- Add a background divider for custom styling options. -->
            <div class="background"></div>

            <!-- Container for the splitter menu content. -->
            <div class="content">
                <v-ons-list>
                    <div v-for="page in pages" :key="page.title">
                        <ons-list-header v-if="page.header">{{ page.header }}</ons-list-header>
                        <!-- Add a new element for every page and highlight the current one if set. -->
                        <v-ons-list-item :class="{'selected': page.path == $router.history.current.fullPath}" :style="page.style" tappable :modifier="page.path == $router.history.current.fullPath ? 'longdivider' : 'longdivider chevron'" @click="$router.push(page.path); showMenu = false;">
                            <!-- Render the icon with our settings if it is specified. -->
                            <div v-if="page.icon" class="left">
                                <v-ons-icon fixed-width="true" :size="page.size" :style="page.style" :rotate="page.rotate" :icon="page.icon"></v-ons-icon>
                            </div>
                            <!-- Optionally show a subtitle. -->
                            <div v-if="page.image">
                                <img class="list-item__thumbnail" :src="page.image">
                            </div>
                                <!-- Get the page's formatted title. -->
                                <div class="center">
                                    <span :class="page.subtitle ? 'list-item__title' : ''">{{ page.title }}</span>
                                    <span v-if="page.subtitle" class="list-item__subtitle">{{ page.subtitle }}</span>
                                </div>
                        </v-ons-list-item>
                    </div>
                </v-ons-list>
            </div>
        </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
        <!-- The main navigator entry point for routing. -->
        <v-ons-navigator swipeable swipe-target-width="200px" :page-stack="pageStack" :pop-page="goBack" @toggle-menu="showMenu = !showMenu" />
    </v-ons-splitter-content>
</v-ons-splitter>
</template>

<script>
// NOTICE: If you want to use TypeScript in Vue components add lang="ts" the script tag.
// This is the main root element containing any data that might get passed down.
// Additionally, it handles things such as the stack menu that slides open.
export default {
    data() {
        return {
            // Page stack used for state management.
            pageStack: [],

            // Pages to be listed in the splitter menu as well as their routes and properties.
            // The items are presented in the order that they appear in the array.
            pages: [
                /* Possible parameters:
                    path: Points to the path of the route to navigate to. Is required.
                    title: Main descriptive vanity title for the navigation page.
                    subtitle: Smaller title that can either be used alone or in conjunction with a title
                    icon: Font-Awesome, Ionicon or Material Icon to show as a tool tip.
                    image: Thumbnail to show in place of an icon for the current item.
                    header: A header to show above the menu item. Useful for dividing sections.
                    style: Custom styling to apply to the menu button.
                    rotate: Integer value of rotation to apply to the icon.
                    size: Size in pixels (32px) or multiplier (2x).
                */

                {
                    path: "/",
                    title: "Home",
                    icon: "md-home",
                },

                {
                    path: "/navigation",
                    title: "Navigation",
                    icon: "ion-stats-bars",
                    header: "Features"
                },

                {
                    path: "/events",
                    title: "Events",
                    icon: "ion-stats-bars"
                },

                /*
                    Little tip on the icons OnsenUI uses: Some do not match those
                    found in the online documentation for FontAwesome or Ionicons.
                    In that case head to *node_modules/onsenui/css/font/css/* and
                    check the descriptors in those files.
                 */
            ],

            // Tracks the menu state across the application.
            showMenu: false
        };
    },

    methods: {
        // Override default pop behavior and delegate it to the router.
        goBack: function() {
            // Go to the parent route component.
            this.$router.push({
                name: this.$route.matched[this.$route.matched.length - 2].name
            });
        },

        // Simple boolean inversion for the toggling of the menu.
        // The stack splitter is bound to the state of that variable as seen above.
        toggleMenu: function() {
            console.log(this.$router);
            this.showMenu = !this.showMenu;
        }
    },

    created() {
        // Define how routes should be mapped to the page stack. This assumes all
        // routes have v-ons-page components and are provided in the 'default' view.

        // For nested named routes or routes that for some reason should not be
        // mapped in v-ons-navigator, filter them out here.
        const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);

        // Set start pageStack depending on the current route instead of always pushing the 'Home' page.
        mapRouteStack(this.$route);

        // On route change, reset the pageStack to the next route.
        this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());

        // Initilize global event listers on the root element. To listen from
        // other components you can use the same convention. We call a method to
        // transfer scope to this module in itself and for async compatability.
        this.$root.$on("toggle-menu", this.toggleMenu);

        // Once the app has loaded we set the current route to the browser path.
        // This is not required in production as there the home page is always the first page.
        this.route = window.location.pathname.substr(1) || "home";
    },
};
</script>

<style scoped>
/* Custom style sheets for this template go here. Should be CSS since it's scoped. */
</style>
