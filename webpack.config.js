const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    devtool: false,
    performance: {
        hints: false,
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
