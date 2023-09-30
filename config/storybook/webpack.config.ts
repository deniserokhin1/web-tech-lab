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
        buildLocales: '',
        locales: ''
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCSSLoaders(true))

    if (config?.module?.rules) {
        const rules = config.module.rules as RuleSetRule[]
        config.module.rules = rules.map((rule) =>
            /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule,
        )

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify(''),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        )

        return config
    }

    return config
}
