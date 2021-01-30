const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            // loader: "css-loader" //单loader
            use: ["style-loader", "css-loader"] //多loader时，注意顺序，从右往左运行
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./text.html",
            filename: "index.html"
        })
    ]

}