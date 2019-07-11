import Vue from 'vue/dist/vue.esm'
import App from './App'
import YourComponent from '../src/index'

Vue.component('YourComponent', YourComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
