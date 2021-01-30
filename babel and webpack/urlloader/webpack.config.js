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
                    loader: "url-loader",
                    options: {
                        name: "imgs/[name].[ext]",
                        esModule: false,
                        //小于limit b的图片会直接进行base64编码嵌入到html中
                        // 大于limit b的图片会调用file-loader进行复制到dist中
                        limit: 5000
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