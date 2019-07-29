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
    more: {
      type: String,
      observer: 'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    q: '',
    searching:false,
    loading: false,
    loadingCenter: false
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
    loadMore (newVal, oldVal) {
      if (!this.data.q) {
        return
      }
      if (this.isLocked()) {
        return;
      }
      if (this.hasMore()) {
        this.locked()
        bookModel.search(this.data.dataArray.length, this.data.q)
          .then(res => {
            this.setMoreData(res.books)
            this.unLocked()
          }, () => {
            this.unLocked()
          })
      }
    },
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm (event) {
      this._showResult()
      this._showLoadingCenter()
      const q = event.detail.value || event.detail.text

      this.setData({
        q
      })

      bookModel.search(0, q)
        .then(res => {
          this.setMoreData(res.books)
          this.setTotal(res.total)
          keywordModel.addToHistory(q)
          this._hideLoadingCenter()
        })
    },
    onDelete(event) {
      this.initialize()
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
    },
    _showLoadingCenter() {
      console.log('tttttttttttttttttttt')
      this.setData({
        loadingCenter: true
      })
    },
    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    }
  }
})
