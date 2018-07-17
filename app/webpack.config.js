let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let config = {
  entry: [path.resolve(__dirname + "/src", "main")],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8000,
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: require.resolve("jquery"),
        loader: "imports?jQuery=jquery"
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=assets/fonts/[name].[ext]"
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
          ? JSON.stringify(process.env.NODE_ENV)
          : JSON.stringify("development")
      }
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: "style.css"
    }),
    new CopyWebpackPlugin([{ from: "public" }])
  ],
  devtool: "source-map"
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
} else {
  config.module.loaders.push({
    test: /.jsx?$/,
    enforce: "pre",
    loader: "eslint-loader",
    exclude: /node_modules/
  });

  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true
        }
      }
    })
  );
}

module.exports = config;
