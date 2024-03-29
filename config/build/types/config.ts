import type webpack from 'webpack'

export type BuildMode = webpack.Configuration['mode']

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    src: string
    locales: string
    images: string
    buildLocales: string
    buildImages: string
}

export interface IBuildEnv {
    mode: BuildMode
    port: number
    apiUrl: string
}

export interface IBuildOptions {
    mode: BuildMode
    paths: IBuildPaths
    isDev: boolean
    port: number
    apiUrl: string
    project: 'storybook' | 'frontend' | 'jest'
}
