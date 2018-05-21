import path from 'path';
import merge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import getBaseConfig from './webpack-base.config.babel';

const baseConfig = getBaseConfig();

export default merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: true
            }
        })
    ]
});