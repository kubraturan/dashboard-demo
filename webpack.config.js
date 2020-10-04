const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
      rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.join(__dirname, 'src'),
            ],
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {   
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                },
              },
            ]
        },
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
  