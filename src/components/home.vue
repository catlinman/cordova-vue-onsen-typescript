
<!-- Our main page from which the application starts. -->

<template>
<v-ons-page>
    <!-- Load the toolbar for this page and tell it to show the navigation menu. -->
    <toolbar menu :title="title" />

    <!-- The background element used to style the page. -->
    <div class="background"></div>

    <!-- Main container element. Both this and the background override default OnsenUI elements. -->
    <div class="content">
        <!-- Create a new card that we will use to hold our welcome message in.  -->
        <v-ons-card>
            <!-- Simple image to demonstrate loading of static assets. -->
            <img class="center-img" src="static/img/vue-onsen.png" alt="Vue &amp; Onsen UI">

            <!-- OnsenUI cards have two predefined classes for the title and content. -->
            <div class="title" style="text-align: center">
                Running Vue.js &amp; OnsenUI!
            </div>
            <div class="content" style="text-align: center">
                This page showcases your working project!
            </div>
        </v-ons-card>
        <p class="center">
            Use the side menu to navigate to some of the features this project introduces.
        </p>
    </div>
</v-ons-page>
</template>

<script lang="ts">
// Import the toolbar and splitter modules that we have defined in separate templates.
import Toolbar from "./templates/toolbar.vue";

export default {
    // This is the data that this view contains.
    data() {
        return {
            title: "Home",
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
