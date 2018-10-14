import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
    <div v-if="!active">
    {{text}}
    </div>
    <div v-else-if="active">else-if-content</div>
    <div v-else>else content</div>
    <input v-model.number.trim="text" />
    <input type="checkbox" v-model="active">
    <div>
    <input type="checkbox" v-model="arr" :value="1">
    <input type="checkbox" v-model="arr" :value="2">
    <input type="checkbox" v-model="arr" :value="3">
    </div>
    <input type="radio" v-model="picked" value="one">
    <input type="radio" v-model="picked" value="two">
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in arr">{{item}}: {{index}}</li>
    </ul>

    <ul>
      <li v-for="(value, key, index) in obj">{{value}}: {{key}} : {{index}}</li>
    </ul>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: false,
    picked: '',
    html: '<span>11111</span>'
  }
})
