const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bandle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),

        },
        open: true,

    },
    optimization: {
        emitOnErrors: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
            }
        ]

    }

};