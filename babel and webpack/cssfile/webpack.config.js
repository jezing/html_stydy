const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                // use: ["style-loader", "css-loader"] //多loader时，注意顺序，从右往左运行
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                }, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }

            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]

}