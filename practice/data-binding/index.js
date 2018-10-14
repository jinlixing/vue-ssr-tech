import Vue from 'vue'

var globalVar = '111' // eslint-disable-line

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //   {{isActive ? 'active' : 'not active'}}
  //   {{Date.now()}}
  //   {{globalVar}}
  //   <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
    :class="[{ active: !isActive }, aaa]"
    :style="[styles, styles2]"
    >
    <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      fontWeight: 'bold'
    },
    arr: [1, 2, 3],
    isActive: false,
    globalVar: globalVar,
    html: '<span>123</span>'
  },
  methods: {
    handleClick () {
      console.log('clicked')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
