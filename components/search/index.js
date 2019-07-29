// components/search/index.js
import {
  KeywordModel
} from '../../models/keyword'

import {
  BookModel
} from '../../models/book.js'

import {
  paginationBev
} from '../behaviors/pagination.js'

const keywordModel = new KeywordModel()
const bookModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    q: '',
    searching:false
  },

  attached () {
    this.setData({
      historyWords: keywordModel.getHistory()
    })

    keywordModel.getHot().then(res => {
      this.setData({
        hotWords: res.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm (event) {
      this._showResult()

      const q = event.detail.value || event.detail.text

      this.setData({
        q
      })

      bookModel.search(0, q)
        .then(res => {
          this.setMoreData(res.books)
          keywordModel.addToHistory(q)
        })
    },
    onDelete(event) {
      this._closeResult()
    },
    _showResult() {
      this.setData({
        searching: true
      })
    },
    _closeResult() {
      this.setData({
        searching: false,
        q: ''
      })
    }
  }
})
