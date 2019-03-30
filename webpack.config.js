const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = env => {
  const baseConfig = {
    // context: resolve(__dirname, 'src'),
    devtool: 'source-map',
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  }

  if (env.dev) {
    return {
      ...baseConfig,
      entry: './src/Example.js',

      mode: 'development',
      output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'example'),
      },
      devServer: {
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          inject: true,
          template: resolve(__dirname, 'example/index.html'),
        }),
      ],
    }
  }

  if (env.prod) {
    return {
      ...baseConfig,
      entry: './src/index.js',
      mode: 'production',
      output: {
        path: resolve(__dirname, 'lib'),
        filename: 'bundle.js',
        filename: 'react-scale-image.js',
        library: 'reactScaleImage',
        libraryTarget: 'umd',
        globalObject: 'this',
      },

      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
        'styled-components': {
          root: 'styled',
          commonjs2: 'styled-components',
          commonjs: 'styled-components',
          amd: 'styledComponents',
        },
      },
    }
  }
}

//   target: 'web',
//   devtool: 'source-map',
//   devServer: {
//     contentBase: path.join(__dirname, 'public')
//   },
//   output: {
//     path: path.resolve(__dirname, 'lib'),
//     filename: 'react-scale-image.js',
//     library: 'reactScaleImage',
//     libraryTarget: 'umd',
//     globalObject: 'this',
//   },
//   externals: {
//     react: {
//       root: 'React',
//       commonjs2: 'react',
//       commonjs: 'react',
//       amd: 'react',
//     },
//     'react-dom': {
//       root: 'ReactDOM',
//       commonjs2: 'react-dom',
//       commonjs: 'react-dom',
//       amd: 'react-dom',
//     },
//     'styled-components': {
//       root: 'styled',
//       commonjs2: 'styled-components',
//       commonjs: 'styled-components',
//       amd: 'styledComponents',
//     },
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
//     ],
//   },
// }
