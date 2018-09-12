
"use strict";

// This is the shared webpack configuration both production and development are based on.

const path = require("path");

const { VueLoaderPlugin }   = require("vue-loader");
// const StyleLintPlugin    = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin     = require("html-webpack-plugin");

module.exports = {
    // Our main Webpack entry files. One for the main TypeScript app with Vue
    // and one additionally for the Stylesheet entry point.
    entry: [
        "./src/index.ts",
        "./src/style/style.scss"
    ],

    resolve: {
        extensions: [".js", ".ts", ".vue", ".scss"],
    },

    // Handle our output path so that it is usable by Cordova.
    output: {
        filename: "static/js/build.js",
        path: path.resolve(__dirname, "./www/")
    },

    module: {
        rules: [
            { // Compile TypeScript files using Babel.
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },

            { // Load Vue.js files into the bundle. Split off their stlye components.
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        ts: "babel-loader!ts-loader!tslint-loader"
                    }
                }
            },

            { // Basic loaders to handle included libraries" JavaScript.
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            { // Handle imported stylesheets as well as Vue style segments.
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

            { // Load in static assets required by modules.
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    name: "static/[name].[ext]"
                }
            }
        ]
    },

    plugins: [
        // Our main Vue loader plugin.
        new VueLoaderPlugin(),

        // Disabled until stylint-webpack-plugin gets support for ^9.0.0
        // new StyleLintPlugin({
        //     configFile: ".stylelintrc",
        //     files: "./**/*.s?(a|c)ss",
        //     syntax: "scss"
        // }),

        // Generate a webpack compatible HTML entry file from our template.
        new HtmlWebpackPlugin({
            template: "src/index.template.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ],

    performance: {
        // This value controls whether size limits are shown. Doesn't make too
        // much sense in the context of the app. Use "warning" or "error" if you want.
        hints: false
    }
};
