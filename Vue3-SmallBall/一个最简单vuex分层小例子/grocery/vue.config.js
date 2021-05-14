/*
 * @Descripttion: 
 * @version: 
 * @Author: Wangwei
 * @Date: 2021-03-16 08:47:05
 * @LastEditors: Wangwei
 * @LastEditTime: 2021-03-23 11:13:17
 */
const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  // publicPath: '/', // 根路径
  // outputDir: 'dist', // 构建输出目录
  productionSourceMap: false, // 打包时不生成.map文件
  lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
  css: {
    loaderOptions: {
      stylus: {
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: [],
              minPixelValue: 1,
              unitPrecision: 2
            }),
            'autoprefixer'
          ])
        ],
        import: [
          // resolve('./src/assets/theme.custom')
        ]
      }
      // less: {
      //   use: []
      // }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('@', resolve('src'))
  }
//   devServer: {
//     // port: 3002,http://132.232.19.211
//     proxy: {
//       '/bicweb': {
//         target: 'http://132.232.19.211:9001',
//         changeOrigin: true
//       },
//       '/omsweb': { // 自定义
//         target: 'http://132.232.19.211:9123', // 这里可以跟随项目实际部署服务器来
//         changeOrigin: true
//       },
//       '/loginweb': {
//         target: 'http://132.232.19.211:9009',
//         changeOrigin: true
//       },
//       '/monitor': {
//         target: 'https://132.232.19.211',
//         changeOrigin: true
//       }
//     }
//   }
  // lintOnSave: process.env.NODE_ENV !== 'production'
}
