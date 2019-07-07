import { HTTP } from '../util/http'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success:(res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback) {
    this.request({
      url: 'classic/' + index + '/' + nextOrPrevious,
      success:(res) => {
        sCallback(res)
      }
    })
  }

  isFirst(index) {
    return index === 1 ? true : false
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    const index = wx.getStorageSync('latest')
    return index
  }
}

export { ClassicModel }
