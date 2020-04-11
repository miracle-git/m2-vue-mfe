const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const svgPath = resolve('./src/assets/svg')
const { title, name } = require('./package')
const port = 8082 // dev port

module.exports = {
  configureWebpack: {
    name: title,
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'config': '@/config',
        'models': '@/models',
        'layouts': '@/layouts',
        'mixins': '@/mixins',
        'plugins': '@/plugins',
        'services': '@/services',
        'utils': '@/utils',
        'views': '@/views'
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  // 添加对svg的自定义解析
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(svgPath)
    config.module.rule('icon').test(/\.svg$/)
      .include.add(svgPath).end() // 回退上下文
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' }).end()
  },
  // 指定Runtime + Compile来编译组件
  runtimeCompiler: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixin.less')
      ]
    }
  },
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: `//localhost:${port}`,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    // host: '0.0.0.0',
    port,
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://dev.app.oa.com/m2',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
