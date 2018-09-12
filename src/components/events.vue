
<!-- This is an example page to show off catching of global events and their handling. -->
<!-- Additionally it also demonstrates importing of external modules. -->

<template id="home-child">
<v-ons-page>
    <!-- Same as our home view. Include the menu for navigation since it's a seperate page. -->
    <toolbar menu :title="title" />

    <!-- The background element used to style the page. -->
    <div class="background"></div>

    <!-- Main container element. Both this and the background override default OnsenUI elements. -->
    <div class="content">
        <p>
            This page demonstrates catching of events that it subscribes to. In this case it will display the menu navigation event and its payload.
        </p>
        <ul>
            <!--We want to render the event since it's a HTML string. -->
            <li :key="event" v-for="event in events" v-html="event">
                {{ event }}
            </li>
        </ul>
    </div>
</v-ons-page>
</template>

<script>
// Import our toolbar template.
import Toolbar from "./templates/toolbar.vue";

// Additionally import everything from our TypeScript utilities module.
import * as Utilities from "../scripts/utilities";

export default {
    // Set the data for this view as well.
    data() {
        return {
            title: "Event Bus",
            events: []
        }
    },

    // Import components/templates.
    components: {
        "toolbar": Toolbar
    },

    // We must handle logic through methods to have access to this components data.
    methods: {
        catchEvents: function(e) {
            // We send the payload to our utility function for demonstration purposes.
            this.events.push("Caught event with payload of: " + Utilities.stringifyObject(e));
        }
    },

    mounted() {
        // We can add events here to listen for. Pass a local method for async handling.
        this.$root.$on("toggle-menu", this.catchEvents);
    }
}
</script>

<style scoped>
/* Custom style sheets for this template go here. Should be CSS since it's scoped. */

p {
    margin-left: 4%;
    margin-right: 4%;
    text-align: justify;
    line-height: 125%;
}

li {
    font-size: 0.75em;
}
</style>
