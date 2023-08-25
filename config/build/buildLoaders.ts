import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

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

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                            // saveMissing: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                ],
            },
        },
    }

    return [babelLoader, typescriptLoaders, cssLoaders, fileLoader, svgLoader]
}
