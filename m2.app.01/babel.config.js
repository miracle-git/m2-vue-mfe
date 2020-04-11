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
        'libraryName': 'sdc-ui',
        'styleLibraryName': 'theme-grace'
      }, 'sdc-ui'
    ]
  ]
}
