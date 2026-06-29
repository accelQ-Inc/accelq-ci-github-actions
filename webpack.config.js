const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, "index.ts"),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname)
    },
    resolve: { extensions: ['.ts', '.js'] },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                  compress: {
                    comparisons: false,
                  },
                  mangle: {
                    safari10: true,
                  },
                  output: {
                    comments: false,
                    ascii_only: true,
                  },
                  warnings: false,
                },
            })
        ]
    }
}