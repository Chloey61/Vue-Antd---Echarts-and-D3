import utilsApi from './http'
let routUrl = '../assets'
let echarts = '/echarts'
let json = '.json'

let echartsApi = {
  getList: () => {
    let _url = routUrl + echarts + '/listEcharts' + json
    return utilsApi.getRequest(_url)
  }
}

export default {
  echartsApi
}
