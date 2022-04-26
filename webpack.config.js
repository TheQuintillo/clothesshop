const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module:{
        rules:
        [
            {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader?name=img/[name].[ext]", "image-webpack-loader"]
            },
            {
                test: /\.css$/i,
                /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: "./",
                    },
                  },
                  "css-loader",
                ],
              }, 
        ],
  },
         plugins: [
         new MiniCssExtractPlugin(),
        ],
}