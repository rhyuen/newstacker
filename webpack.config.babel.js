/* eslint-disable linebreak-style */
/* eslint-disable quotes */
export default {
  output: {
    filename: "client-bundle.js",
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
};
