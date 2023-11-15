import path from 'path'

import type webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildMode, type IBuildEnv, type IBuildPaths } from './config/build/types/config'

function getApiUrl(mode: BuildMode, apiUrl?: string): string {
    if (apiUrl) return apiUrl
    if (mode === 'production') return '/api'
    return 'http://localhost:8000'
}

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
    const apiUrl = getApiUrl(mode, env.apiUrl)

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
