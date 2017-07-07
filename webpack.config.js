const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'sourceMap',//打包代码的同时生成一个sourcemap文件，并在打包文件的末尾添加//# souceURL，注释会告诉JS引擎原始文件位置
    entry: {
        bundle: './src/main.jsx',
        vendor: ['react', 'react-dom', 'jquery', 'react-router', 'redux'],//公用库打包
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },
    //resolve.extensions 用于指明程序自动补全识别哪些后缀,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'postcss-loader',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
        }),
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        contentBase: path.join(__dirname, 'src'),//指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录。
        port: 8080,//开启服务的端口号
        inline: true,
        hot: true,
        historyApiFallback: true//来应对返回404页面时定向到特定页面用,默认false
    },
};