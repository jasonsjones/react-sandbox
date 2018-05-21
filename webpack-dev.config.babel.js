import path from 'path';
import merge from 'webpack-merge';
import getBaseConfig from './webpack-base.config.babel';

const baseConfig = getBaseConfig();

export default merge(baseConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        port: 4200,
        historyApiFallback: true
    }
});