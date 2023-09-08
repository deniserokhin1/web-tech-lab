import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: IBuildEnv): webpack.Configuration => {
    const paths: IBuildPaths = {
        build: path.resolve('build'),
        entry: path.resolve('src', 'index.tsx'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src'),
    }

    const mode = env.mode || 'development'
    const port = env.port || 3000
    const isDev = mode === 'development'
    const apiUrl = env.apiUrl || 'http://localhost:8000/'

    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        isDev,
        mode,
        port,
        apiUrl,
    })
    return config
}
