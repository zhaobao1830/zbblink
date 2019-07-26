import {HTTP} from '../util/http-p.js'

class KeywordModel extends HTTP {
  key = 'q'

  getHistory () {

  }

  getHot () {

  }

  addToHistory (keyword) {
    wx.setStorageSync(this.key, keyword)
  }
}

export {
  KeywordModel
}
