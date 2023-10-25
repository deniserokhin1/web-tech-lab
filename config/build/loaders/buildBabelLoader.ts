/* eslint-disable @typescript-eslint/explicit-function-return-type */
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { type IBuildOptions } from '../types/config'

interface BuildBabelLoaderProps extends IBuildOptions {
    isTsx?: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    '@babel/plugin-transform-runtime',
                    isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }],
                ].filter(Boolean),
            },
        },
    }
}
