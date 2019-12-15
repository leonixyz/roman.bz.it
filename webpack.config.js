const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js',
    path: path.resolve(__dirname, '.'),
  },
  module: {
    rules: [
      {
        test: /\.(css)|(html)$/i,
        use: 'raw-loader',
      },
    ]
  }
};
