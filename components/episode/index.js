// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer (newVal, oldVal, changedPath) {
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 11,
    date: String
  },

  attached () {
    console.log(this.properties._index)
    console.log(this.data.year)
    console.log(this.data.date)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
