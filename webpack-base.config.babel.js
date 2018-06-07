import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default () => {
    let config = {
        entry: {
            app: './src/index.js',
            vendor: [
                'react',
                'react-dom',
                'prop-types',
                'react-router-dom',
                'react-svg-inline'
            ]
        },
        resolve: {
            alias: {
                sldsCss: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/styles'),
                sldsImages: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/images'),
                sldsIcons: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/icons')
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-3', 'stage-2']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: {
                            loader: 'css-loader'
                        }
                    })
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: 'raw-loader'
                    }
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                title: 'React Sanbox',
                favicon: './assets/favicon-32x32.png'
            }),
            new webpack.optimize.SplitChunksPlugin({
                name: "vendor",
            }),
            new ExtractTextPlugin("styles.css"),
        ]
    };
    return config;
};