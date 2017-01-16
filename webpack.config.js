path = require('path');
const webpack = require('webpack');

var config = {
   devtool: 'cheap-module-source-map',

   entry: './static/main.js',
	
   output: {
      path:'./',
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 5000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

   plugins: [
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      })
   ]
}

module.exports = config;