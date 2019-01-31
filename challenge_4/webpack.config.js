var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: __dirname + "/client/src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', 'babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "/client/dist"
  }
}



// output: {
//   path: path.resolve(__dirname, 'build'),
//   filename: 'app.bundle.js'
// },