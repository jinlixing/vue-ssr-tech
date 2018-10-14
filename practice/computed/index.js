import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>{{name}}</span>
      <span>{{getName()}}</span>
      <p>{{number}}</p>
      <p><input type="text" v-model="number" /></p>
      <p><input type="text" v-model="firstName" /></p>
      <p><input type="text" v-model="lastName" /></p>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0
  },
  computed: {
    name () {
      console.log('new name')
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName () {
      console.log('firstName changed')
    },
    lastName: {
      handler () {
        console.log('lastName changed')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoke')
      return this.firstName + ' ' + this.lastName
    }
  }
})
