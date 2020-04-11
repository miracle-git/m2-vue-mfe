module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }, 'element-ui'
    ],
    [
      'component',
      {
        'libraryName': 'm2-ui',
        'styleLibraryName': 'theme-grace'
      }, 'm2-ui'
    ]
  ]
}
