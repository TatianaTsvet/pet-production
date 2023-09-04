import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildLoaders():webpack.RuleSetRule[] {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
        //   "style-loader",
        MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
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