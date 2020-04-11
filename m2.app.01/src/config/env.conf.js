export default {
  loc: {
    api: 'http://test.app.oa.com/sdc'
    // support multi-api config(you need to add apiKey, eg：'mock', 'app')
    // api: {
    //   mock: 'http://test.app.oa.com/sdc/mock',
    //   app: 'http://test.app.oa.com/sdc'
    // }
  },
  dev: {
    api: 'http://dev.app.oa.com/sdc'
  },
  sit: {
    api: 'http://sit.app.oa.com/sdc'
  },
  uat: {
    api: 'http://uat.app.oa.com/sdc'
  },
  prd: {
    api: 'http://app.oa.com/sdc'
  }
}
