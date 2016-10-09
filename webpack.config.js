var path = require('path');
var webpack = require('webpack');
var config = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        "./src/app.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: ['', '.js', '.jsx'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-runtime"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = config;