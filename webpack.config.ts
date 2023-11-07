import path from 'path'

import type webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv): webpack.Configuration => {
    const paths: IBuildPaths = {
        build: path.resolve('build'),
        entry: path.resolve('src', 'index.tsx'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src'),
        locales: path.resolve('public', 'locales'),
        images: path.resolve('src', '6_shared', 'assets', 'img'),
        buildImages: path.resolve('build', 'images'),
        buildLocales: path.resolve('build', 'locales'),
    }

    const mode = env.mode || 'development'
    const port = env.port || 3000
    const isDev = mode === 'development'
    const apiUrl = env.apiUrl

    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        isDev,
        mode,
        port,
        apiUrl,
        project: 'frontend',
    })
    return config
}
