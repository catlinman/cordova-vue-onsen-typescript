
<!-- Our main page from which the application starts. -->

<template>
<v-ons-page>
    <!-- Load the toolbar for this page and tell it to show the navigation menu. -->
    <toolbar menu :title="title" />

    <!-- The background element used to style the page. -->
    <div class="background"></div>

    <!-- Main container element. Both this and the background override default OnsenUI elements. -->
    <div class="content">
        <p>
            This page demonstrates how to handle navigation on pages as well as
            hidden child pages.
        </p>


        <!-- Make a new link that points to the home-child page entry in our router. -->
        <v-ons-button @click="$router.push({name: 'navigation-child'})" modifier="large">
            Click to navigate to the child page
        </v-ons-button>

        <!-- Create an additional link to show how to run router linking via text. -->
        <br />
        <section class="center">
            <router-link :to="{name: 'navigation-child'}">
                You can alternatively define router links like this!
            </router-link>
        </section>
    </div>
</v-ons-page>
</template>

<script>
// Import the toolbar and splitter modules that we have defined in separate templates.
import Toolbar from "./templates/toolbar.vue";

export default {
    // This is the data that this view contains.
    data() {
        return {
            title: "Navigation",
        };
    },

    // Load in our required components that we previously imported.
    components: {
        toolbar: Toolbar,
    },
};
</script>

<style scoped>
/* Custom style sheets for this template go here. Set lang="scss" for Sass support. */
</style>
