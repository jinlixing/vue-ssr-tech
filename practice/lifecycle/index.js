import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () { // 在组件章节讲解
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    // throw new TypeError('new error')
    // console.log('render function invoke')
    // return h('div', {}, 'this is a div')
  },
  renderError (h, error) {
    return h('div', {}, error.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用
  }
})

setTimeout(() => {
  app.text += 1
}, 1000)

setTimeout(() => {
  app.$destroy()
}, 2000)
