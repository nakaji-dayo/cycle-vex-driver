module.exports = {
    entry: "./app.js",
    output: {
	path: __dirname + "/dist",
	filename: "app.js"
    },
    module: {
	loaders: [
	    {
		test: /\.js.*$/,
		exclude: /(node_modules)/,
		loader: 'babel?presets[]=es2015'
	    }
	]
    },
    resolve: {
	alias: {
	    vex: 'vex-js'
	}
    }
};
