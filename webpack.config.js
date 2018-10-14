var path = require('path'); //imports path library, which is a tool to help create a file path from multiple folders
var SRC_DIR = path.join(__dirname, '/client/src'); //uses path .join to take multiple directory names and puts them together
var DIST_DIR = path.join(__dirname, '/client/dist'); //__dirname represents the current directory

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, //where webpack starts looking for files to transpile
  output: {
    filename: 'bundle.js', //where to put compiled files
    path: DIST_DIR //basic webpack just needs an entry and an output
  },
  module : {
    loaders : [ //any file in src directory ending in .js or .jsx that should be run through babel loader
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015'] //babel loader will transform react(jsx) and es6
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
      }
    ]
  }
};
