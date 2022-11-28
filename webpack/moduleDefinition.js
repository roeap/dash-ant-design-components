"use strict";

var directories = require("./directories");

module.exports = {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/, // used to get `request` to work: https://github.com/request/request/issues/1920#issuecomment-171246043
    rules: [
        {
            test: /\.json$/,
            loader: "json-loader",
        },
        {
            test: /\.jsx?$/,
            include: [directories.SRC, directories.DEMO],
            loader: "babel-loader",
        },
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            include: [directories.SRC, directories.DEMO],
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
};
