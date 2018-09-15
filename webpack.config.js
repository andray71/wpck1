const HtmlWebpackPlugin = require('html-webpack-plugin')

//const webpack = require("webpack")
var path = require("path"),
    wp = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js")
    , output: {
        path: path.join(__dirname, "dist")
        , filename: "assets/bundle-[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",

        }),
    ]
    , mode: "development"
    , devtool: "source-map"
    , devServer: {
        "hot": true
        , quiet: true
        , inline:true
        , historyApiFallback: true
        , "port": "8090"
        , "open": true
        , overlay: {
            warnings: true
            , errors: true
        }

    }
    , module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
                ]
            },
        ]
    }
}