//...
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    // 单入口
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./index.html"
    //     })
    // ]

    // 多入口
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", //指定需要编译的文件
            filename: "index.html", //编译后的文件命名
            chunks: ["index"], //引用哪个js文件对应entry入口文件名
            minify: {
                //删除html中的注释
                removeComments: true,
                // 删除html中的空格
                collapseWhitespace: true,
                // 删除便签的双引号
                removeAttributeQuotes: true
            }

        }), new HtmlWebpackPlugin({
            template: "./search.html",
            filename: "search.html",
            chunks: ["search"],
            minify: {
                //删除html中的注释
                removeComments: true,
                // 删除html中的空格
                collapseWhitespace: true,
                // 删除便签的双引号
                removeAttributeQuotes: true
            }
        }),

    ]
};