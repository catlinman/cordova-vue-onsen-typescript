
"use strict";

// Production webpack configuration run through "npm run build".
// Outputs everything to the www build directory for Cordova to further process.

const path      = require("path");
const merge     = require("webpack-merge");
const common    = require("./webpack.common.js");

const CleanWebpackPlugin    = require("clean-webpack-plugin");
const CopyWebpackPlugin     = require("copy-webpack-plugin");
const ImageminPlugin        = require("imagemin-webpack-plugin").default;
const OptimizeCssPlugin     = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
    mode: "production",

    module: {
        rules: [
            { // Transpile and bundle stylesheets in their own file.
				test: /\.scss$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].css",
							outputPath: "static/css/"
						}
					},

                    "extract-loader",
                    "css-loader",
					"sass-loader"
				]
			}
        ]
    },

    plugins: [
        // Clean our build directory.
        new CleanWebpackPlugin(path.resolve(__dirname, "www"), {
            root:     __dirname,
            exclude:  [],
            verbose:  true,
            dry:      false
        }),

        // Copy our own static assets to the build directory.
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/static/**/*"),
            to: path.resolve(__dirname, "www/static"),
            context: "src/static/"
        }]),

        // Image and data compression plugin.
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        }),

        // CSS minification plugin.
        new OptimizeCssPlugin({
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
        })
    ]
});
