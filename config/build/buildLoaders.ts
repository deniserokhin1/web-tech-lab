import type webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'
import { type IBuildOptions } from './types/config'

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    }

    // const typescriptLoaders = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const cssLoaders = buildCSSLoaders(isDev)

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoaders]
}
