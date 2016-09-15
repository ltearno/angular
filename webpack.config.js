var path = require("path");
var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./angular2-all.umd.js",
    //entry: "./angular2-all-material.umd.js",
    output: {
        path: path.join(__dirname, "js"),
        filename: "angular2-all.umd.js",
		//filename: "angular2-all-material.umd.js",
        library: ["ng"],
        libraryTarget: "var"
    },
	module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
		new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.MinChunkSizePlugin({minChunkSize:2048}),
		new webpack.optimize.OccurrenceOrderPlugin(false),
		new webpack.optimize.UglifyJsPlugin(),
		/*new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 5240,
			minRatio: 0.8
		})*/
	]
}