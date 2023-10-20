import webpack from 'webpack';
import buildPlugins from './buildPlugins';
import { BuildOptions } from './types/config';
import buildResolvers from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';

export default function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        // stats: 'errors-only',
    };
}
