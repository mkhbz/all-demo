const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path");
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    mode: "development",//开发模式
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            },
            {//对引入的node_modules中的antd样式处理
                test: /\.css$/,
                exclude: /src/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
        ],
    },

    resolve: {
        extensions: [".jsx", ".js"],
        alias: {
            '@': resolve('./../src')
        }
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        // contentBase: resolve('./../dist')
    },
    entry: {
        app: resolve('./../src/index.js')
    },
    output: {
        path: resolve("./../dist"),
        filename: "js/[name].[hash].js",
        // publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'main',
                filename: "index.html", // html模板的生成路径
                template: resolve('./../index.html'),//html模板
                inject: true, // true：默认值，script标签位于html文件的 body 底部
                hash: true, // 在打包的资源插入html会加上hash
                //  html 文件进行压缩
                minify: {
                    removeComments: true,               //去注释
                    collapseWhitespace: true,           //压缩空格
                    removeAttributeQuotes: true         //去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
                }
            }
        )
    ]
}
console.log('正在启动服务:☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀');