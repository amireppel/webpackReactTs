const HtmlWebPackPlugin = require("html-webpack-plugin");
const  webpack =require("webpack");
const path = require("path")


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        storyApiFallback: true
    },

    module: {

        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      "@babel/preset-env",
                      "@babel/preset-react",
                      "@babel/preset-typescript",
                    ],
                  },
                },
              },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],


            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    }
}
