
// This declaration allows Vue modules to be imported without errors into TypeScript.
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

// Create a wrapper for our VueOnsen module.
declare module "vue-onsenui";
