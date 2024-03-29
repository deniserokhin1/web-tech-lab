import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export const buildCSSLoaders = (isDev: boolean): webpack.RuleSetRule => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[name]__[local]_[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }
}
