const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'publick/dist'),
        filename: 'bandle.js',
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