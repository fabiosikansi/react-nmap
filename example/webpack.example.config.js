module.exports = {
    entry: './example/example',
    output: {
        filename: 'example-bundle.js',
        path: __dirname
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    externals : {
        "react": "React",
        "react-dom": "ReactDOM",
        "d3": "d3",
        "nmap": "nmap"
    }
};
