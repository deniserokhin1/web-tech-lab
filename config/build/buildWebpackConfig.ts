import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildResolvers } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { paths, isDev, mode } = options
    const { build, entry, src } = paths

    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
        },
        resolve: buildResolvers(src),
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
