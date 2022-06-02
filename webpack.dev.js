const webpack = require('webpack');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    console.log(env);
    return {
        devtool: 'source-map',
        entry: {
            cashier: ['./resources/js/cashier.js'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(`./${env.path || 'casino_log/'}/js`),
            publicPath: `/${env.path || 'casino_log/'}/js/`,
            chunkFilename: '[name].bundle.js',
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca|fr-ca/),
            new MiniCssExtractPlugin({
                filename: '../css/styles.css',
                chunkFilename: '[id].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../fonts',
                            outputPath: '../fonts',
                        },
                    },
                },
            ],
        },
        resolve: {
            modules: [
                path.resolve('./resources/js'),
                path.resolve('./node_modules'),
            ],
        },
    };
};
