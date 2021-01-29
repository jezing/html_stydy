//...
const path = require('path');

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
            test: /\.js$/, //包含整个文件夹里面的所有.js结尾的文件
            exclude: /node_modules/, //排除node_modules文件夹里面的js文件
            loader: "babel-loader"
        }]
    }
};