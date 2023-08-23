import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
    const { paths } = options

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}
