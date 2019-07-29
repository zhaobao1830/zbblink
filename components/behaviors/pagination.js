const paginationBev = Behavior({
  data: {
    dataArray: []
  },
  methods: {
    setMoreData (dataArray) {
      const tempArray = this.data.dataArray.concat(dataArray)
      this.setData({
        dataArray: tempArray
      })
    }
  }
})

export {
  paginationBev
}
