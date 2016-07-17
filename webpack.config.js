var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./angular2-all.umd.js",
    output: {
        path: path.join(__dirname, "js"),
        filename: "angular2-all.umd.js",
        library: ["ng"],
        libraryTarget: "var"
    },
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.MinChunkSizePlugin({minChunkSize:2048}),
		new webpack.optimize.OccurrenceOrderPlugin(false),
		new webpack.optimize.UglifyJsPlugin()
	]
}