var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  /* 输入文件 */
  entry: './src/main.js',
  output: {
    /* 输出目录，没有则新建 */
    path: path.resolve(__dirname, './dist'),
    /* 静态目录，可以直接从这里取文件 */
    publicPath: '/dist/',
    /* 文件名 */
    filename: 'build.js'
  },
  module: {
    rules: [
      /* 用来解析vue后缀的文件 */
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file" 
      },
      { 
        test: /\.(woff|woff2)$/, 
        loader:"url?prefix=font/&limit=5000" 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=application/octet-stream" 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&mimetype=image/svg+xml" 
      }
    ]
  },
  devServer:{
    hisyoryApiFallback:true,
    noInfo:true
  },
  devtool:'#eval-source-map',
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.common.js'
    }
  }
}

if(process.env.NODE_ENV==='production'){
  module.exports.devtool='#source-map'
  module.exports.plugins=(module.exports.plugins||[]).concat([
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:'"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warning:false
      }
    })
  ])
}
