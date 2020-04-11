export default {
  loc: {
    api: 'http://test.app.m2.com/m2'
    // support multi-api config(you need to add apiKey, eg：'mock', 'app')
    // api: {
    //   mock: 'http://test.app.m2.com/m2/mock',
    //   app: 'http://test.app.m2.com/m2'
    // }
  },
  dev: {
    api: 'http://dev.app.m2.com/m2'
  },
  sit: {
    api: 'http://sit.app.m2.com/m2'
  },
  uat: {
    api: 'http://uat.app.m2.com/m2'
  },
  prd: {
    api: 'http://app.m2.com/m2'
  }
}
