import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'

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

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = buildCSSLoaders(isDev)

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    }

    return [babelLoader, typescriptLoaders, cssLoaders, svgLoader, fileLoader]
}
