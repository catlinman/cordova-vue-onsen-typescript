
<!-- Sub page belonging to the navigation page. -->

<template id="navigation-child">
<v-ons-page>
    <!-- Same as on our navigation view except this time we don't want a navigation menu. -->
    <toolbar :title="title" />

    <!-- The background element used to style the page. -->
    <div class="background"></div>

    <!-- Compared to the navigation view we will create a custom layout and define it scoped below. -->
    <div class="content">
        <p>
            This page is a child of the home page!
        </p>
    </div>
</v-ons-page>
</template>

<script>
// Import our toolbar template.
import Toolbar from "./templates/toolbar.vue";

export default {
    // Set the data for this view as well.
    data() {
        return {
            title: "Child"
        }
    },

    // Import components/templates.
    components: {
        "toolbar": Toolbar
    }
}
</script>

<style scoped>
/* Add our scoped custom style here. For larger style changes use the main style.scss */
</style>
