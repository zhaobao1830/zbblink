import { config } from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005:'appkey无效，请前往www.7yue.pro申请',
  3000:'期刊不存在'
}

class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.app_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appKey': config.appKey
      },
      success:(res) => {
        let code = res.statusCode
        if (code.toString().startsWith('2')) {
          params.success(res.data)
        } else {
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:(err) => {
        this._show_error(1)
      }
    })
  }

  _show_error(error_code) {
    if(!error_code){
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      code: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
