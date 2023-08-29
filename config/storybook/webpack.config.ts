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
    config.module.rules.push(buildCSSLoaders(true))

    return config
}
