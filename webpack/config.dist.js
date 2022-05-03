"use strict";

var path = require("path");
var webpack = require("webpack");
var moduleDefinition = require("./moduleDefinition");
var directories = require("./directories");
const packagejson = require("../package.json");

var OccurrenceOrderPlugin = require("webpack").optimize.OccurrenceOrderPlugin;

var NODE_ENV = process.env.NODE_ENV || "development";
var environment = JSON.stringify(NODE_ENV);

const dashLibraryName = packagejson.name.replace(/-/g, "_");
var buildPath = path.join(directories.ROOT, dashLibraryName);

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || "production";
    const entry = { main: [path.join(directories.SRC, "ts/index.ts")] };
    const output = {
        path: buildPath,
        filename: `${dashLibraryName}.min.js`,
        library: {
            name: dashLibraryName,
            type: "umd",
        },
    };

    const externals = {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            umd: "react",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            umd: "react-dom",
            root: "ReactDOM",
        },
    };

    /* eslint-disable no-console */
    console.log("Current environment: " + mode);
    /* eslint-enable no-console */

    return {
        cache: false,
        // context: `${directories.SRC}/ts`,
        mode,
        externals,
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        module: moduleDefinition,
        optimization: {
            minimize: true,
            chunkIds: "total-size",
            moduleIds: "size",
        },
        entry,
        output,
    };
};
