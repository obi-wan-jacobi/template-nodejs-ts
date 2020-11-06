var path = require('path');

var apiName = 'rsc_agg_poc';

module.exports = {
    mode: 'production',
    // devtool: 'inline-source-map',
    entry: [`./src/${apiName}.ts`],
    output: {
        filename: `${apiName}.js`,
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
