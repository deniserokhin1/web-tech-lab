import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[name]__[local]_[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    return [typescriptLoaders, cssLoaders]
}
