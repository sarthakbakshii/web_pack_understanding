const path = require("path")
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "bable-loader",
      },
    ],
  },
  output: {
    path: "",
    filename: "",
  }
};
