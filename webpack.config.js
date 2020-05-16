const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'TimeScheduleTable.js',
        library: 'TimeScheduleTable',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    externals: {

    },
    optimization: {
        minimizer: [
            new TerserPlugin()
        ]
    },
    devtool: 'inline-source-map'

}