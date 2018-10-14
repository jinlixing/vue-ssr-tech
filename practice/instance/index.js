import Vue from 'vue'

const app = new Vue({
  template: '<div ref="div">this is a {{test}} {{obj.a}}</div>',
  data: {
    test: 0,
    obj: {}
  }
  // watch: {
  //   test (newTest, oldTest) {
  //     console.log(newTest, oldTest)
  //   }
  // }
})

app.$mount('#root')

// let i = 0
// setInterval(() => {
//   // app.test += 1
//   // app.test += 1
//   // app.test += 1
//   // app.test += 1
//   // app.test += 1
//   // i++
//   // app.obj.a = i
//   // app.$forceUpdate()
//   // app.$set(app.obj, 'a', i)
//   // app.$delete(app.obj, 'a')
//   // app.$options.data.test += 2
//   // app.$data.test += 3
// }, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// <item><div></div></item>
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('test', (newTest, oldTest) => {
//   console.log(newTest, oldTest)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on('test', (a, b) => {
//   console.log('test is change', a, b)
// })
// app.$emit('test', 1, 2)

// app.$once('once', () => {
//   console.log('once is change')
// })
// setInterval(() => {
//   app.$emit('once')
// }, 1000)
