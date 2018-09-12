
<template>
<!-- Main toolbar element. -->
<v-ons-toolbar class="toolbar">
    <!-- Create the OnsenUI navigation menu button if it is specified. -->
    <div class="left menu" v-if="menu">
        <!-- If the button is clicked call the local method. -->
        <v-ons-toolbar-button @click="toggleMenu()">
            <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
    </div>

    <!-- We want OnsenUI to handle the back button logic on its own. -->
    <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
    </div>

    <!-- Insert the title of the parent view through this view's property. -->
    <div class="center">{{ title }}</div>
</v-ons-toolbar>
</template>

<script>
export default {
    // The toolbar on its own does not contain any data.
    data() {
        return {}
    },

    // However we want to define properties that can be bound to parent views.
    // Could also define this as props: ["title", "menu"].
    props: {
        // This property will hold the title of the parent view.
        title: String,

        // Properties can have default values and types as well.
        menu: {
            default: false,
            type: Boolean
        }
    },

    // Register our toggleMenu action to be used on the button.
    methods: {
        toggleMenu() {
            // The event is sent to the main application root for global handling.
            this.$root.$emit("toggle-menu", {
                // Data to be passed goes here. For demonstration purposes we
                // will pass the time the button was click on.
                time: new Date().toJSON().slice(0, 19).replace(/[-T]/g, ":")
            });
        }
    }
}
</script>

<style scoped>
/* Custom style sheets for this template go here. Should be CSS since it's scoped. */
</style>
