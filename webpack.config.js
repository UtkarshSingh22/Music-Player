const DotenvWebpackPlugin = require("dotenv-webpack");
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    performance: {
        hints: false,
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new DotenvWebpackPlugin()],
};
