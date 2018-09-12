
"use strict";

// Development webpack configuration run through "npm run live".
// Meant to be run as a development server for live reloading and testing.

const path      = require("path");
const merge     = require("webpack-merge");
const common    = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",

    module: {
        rules: [
            { // Javascript source map loader for easier debugging.
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre"
            },

            { // Lint JavaScript in Vue templates and beyond.
                test: /\.(jsx?|vue)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                enforce: "pre",
            },

            { // Lint TypeScript using tslint beforehand. Ignore Vue files.
                test: /^((?!\.vue).)*\.tsx?$/,
                exclude: /node_modules/,
                loader: "tslint-loader",
                enforce: "pre"
            },

            { // Lint TypeScript in Vue files.
                test: /\.vue\.tsx?$/,
                exclude: /node_modules/,
                loader: "vue-tslint-loader",
                enforce: "pre"
            },

            { // Transpile and bundle stylesheets in their own file.
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },

                {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },

                {
                    loader: "sass-loader", options: {
                        sourceMap: true,
                        includePaths: [path.resolve(__dirname, "./src/style/")]
                    }
                }]
            }
        ]
    },

    plugins: [],

    devServer: {
        host: "localhost", // Change in case you want a different host to bind to.
        port: 8080, // Development server port.
        compress: true, // Enable gzip compression.
        open: false, // If to open a browser after initialization.
        contentBase: path.resolve(__dirname, "./src/"), // Set the content base.
        watchContentBase: true, // Reload for code changes to static assets.

        watchOptions: {
            ignored: /node_modules/,
            poll: true,
        },

        historyApiFallback: true,
    },

    devtool: "#eval-source-map"
});
