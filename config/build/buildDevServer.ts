import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { type IBuildOptions } from './types/config'

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const { port } = options

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false,
        },
    }
}
