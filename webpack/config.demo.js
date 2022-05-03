"use strict";

var path = require("path");
var webpack = require("webpack");
var moduleDefinition = require("./moduleDefinition");
var directories = require("./directories");
const packagejson = require("../package.json");

const dashLibraryName = packagejson.name.replace(/-/g, "_");
var publicHost = process.env.DEMO_PUBLIC_HOST || undefined;
var buildPath = path.join(directories.ROOT,  "demo-lib");

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || "development";
    const entry = { bundle: [path.join(directories.ROOT, "demo/index.tsx")] };

    /* eslint-disable no-console */
    console.log("Current environment: " + mode);
    console.log("Using public host: " + publicHost || "<default>");
    /* eslint-enable no-console */

    return {
        cache: false,
        // context: directories.SRC,
        mode,
        entry,
        module: moduleDefinition,
        devServer: {
            static: "demo",
            compress: true,
            port: 9000,
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        output: {
            library: {
                name: dashLibraryName,
                type: "this",
            },
            path: buildPath,
            pathinfo: true,
            publicPath: "/demo-lib/", // For loading from webpack dev server
            filename: "[name].js",
        },
    };
};
