const paginationBev = Behavior({
  data: {
    dataArray: [],
    total: null,
    loading: false,
    noneResult: false
  },
  methods: {
    setMoreData (dataArray) {
      const tempArray = this.data.dataArray.concat(dataArray)
      this.setData({
        dataArray: tempArray
      })
    },
    getCurrentStart () {
      return this.data.dataArray.length
    },
    setTotal (total) {
      this.data.total = total
      if (total == 0) {
        this.setData({
          noneResult: true
        })
      }
    },
    hasMore () {
      if (this.getCurrentStart() >= this.data.total) {
        return false
      } else {
        return true
      }
    },
    isLocked () {
      return this.data.loading ? true : false
    },
    locked () {
      this.setData({
        loading: true
      })
    },
    unLocked () {
      this.setData({
        loading: false
      })
    },
    initialize () {
      this.setData({
        dataArray: [],
        loading: false,
        noneResult: false
      })
      this.data.total = null
    }
  }
})

export {
  paginationBev
}
