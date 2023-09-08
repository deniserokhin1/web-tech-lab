import { DefinePlugin, type RuleSetRule } from 'webpack'
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders'
import { type IBuildPaths } from '../build/types/config'
import path from 'path'
import type webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCSSLoaders(true))

    if (config?.module?.rules) {
        const rules = config.module.rules as RuleSetRule[]
        rules.map((rule) => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })

        config.module.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify(''),
            }),
        )

        return config
    }

    return config
}
