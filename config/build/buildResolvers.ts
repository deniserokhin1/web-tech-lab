import type webpack from 'webpack'

export function buildResolvers(src: string): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        alias: {},
    }
}
