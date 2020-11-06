var path = require('path');

module.exports = {
    mode: 'production',
    // devtool: 'inline-source-map',
    entry: ['./src/main.ts'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        environment: {
            arrowFunction: false,
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [
    ]
};
