module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/", // 部署生产环境和开发环境下的URL
    outputDir: 'dist', // 构建输出目录(npm run build 或 yarn build 时 ，生成文件的目录名称)
    assetsDir: 'assets', // 用于放置生成的静态资源(js、css、img、fonts)的;（项目打包之后，静态资源会放在这个文件夹下）
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: false, // 是否使用包含运行时编译器的Vue核心的构建
    transpileDependencies: [], // 默认情况下 babel-loader 忽略其中的所有文件 node_modules,这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    filenameHashing: false, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    css: { // 配置高于chainWebpack中关于 css loader 的配置
        modules: false, // 是否开启支持 foo.module.css 样式
        extract: true, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        sourceMap: false, // 是否构建样式地图，false 将提高构建速度
        loaderOptions: { // css预设器配置项
            // sass: {
            //     data:'' // `@import "@/assets/scss/mixin.scss";`
            // },
            css: {
                // options here will be passed to css-loader
            },
            // postcss: {
            //     // options here will be passed to postcss-loader
            // }
        }
    },
    configureWebpack: (config) => {
      //webpack-bundle-analyzer 插件
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      if (process.env.NODE_ENV === 'production') {
          return {
              plugins: [
                  new BundleAnalyzerPlugin()
              ]
          }
      }
    },
    // 支持webPack-dev-server的所有选项
    devServer: {
        open: true, // 是否自动启动浏览器
        host: '0.0.0.0',
        port: 3000, // 端口号
        https: false,
        hotOnly: false,
        // proxy: null,
        proxy: { // 配置多个代理
            '/api': {
                target: 'http://49.232.19.124:3000',
                ws: true,
                changOrigin: true
            },
            // '/api2': {
            //     target: 'http://49.232.19.124:3000',
            //     ws: true,
            //     changOrigin: true
            // },
            "/foo": {
                target: "http://localhost:9000",
                ws: true,
                changOrigin: true
            }
        },
        before: app => {}
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理 babel 编译
    pwa: { // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    pluginOptions: {} // 第三方插件配置
};