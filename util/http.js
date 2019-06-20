import  { config } from '/config.js'

class HTTP {
   request (params) {
      wx.request({
        url:  params.url
      })
   }
}
