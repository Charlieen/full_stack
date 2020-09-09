// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

axios('/static/1.txt').then(res=>{
  console.log( res.data);
},err=>{
  alert('request failure!')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { },
  template: '<router-view/>'
})
