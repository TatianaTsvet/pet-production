import webpack from "webpack";
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import { BuildOptions } from "./types/config";
import buildResolvers from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    }
}