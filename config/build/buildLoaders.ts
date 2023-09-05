import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
        //   "style-loader",
        isDev ? MiniCssExtractPlugin.loader : "style-loader",
          // Translates CSS into CommonJS
        //   "css-loader",
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64: 5]' : '[hash:base64: 8]', 
                }
                
            }
        },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      };
    
    // Если не используется typescript
    // нужен babel-loader
    const typeScriptLoader = {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
    return [typeScriptLoader, cssLoaders];
}