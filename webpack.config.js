const HtmlWebpackPlugin = require('html-webpack-plugin');

//const webpack = require("webpack")
var path = require("path"),
    wp = require("webpack");
const APP_DIR = path.join(__dirname, "src/");

module.exports = {
    //context: `${__dirname}/src`,
    entry: path.resolve(__dirname, "./src/index.js")
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
        //, quiet: true
        , inline:true
        , historyApiFallback: true
        , contentBase: './'
        , "port": "8090"
        , "open": true
        , overlay: {
            warnings: true
            , errors: true
        },


    }
    , module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                include: APP_DIR,
                loader: 'babel-loader',
                //include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
                    'resolve-url-loader',
                ]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
        ]
    },
    resolve: {
        extensions: [".js",".ts",".tsx"]
    }
};