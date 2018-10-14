module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 去除空格
    extractCSS: !isDev, // 将 vue 文件中的 css 分离到单独的 css 文件中
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, // 根据环境变量生成
  }
}
