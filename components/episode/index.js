// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      default: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: Number,
    date: String
  },

  attached () {
    console.log(this.properties.index)
    console.log(this.data.year)
    console.log(this.data.date)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
