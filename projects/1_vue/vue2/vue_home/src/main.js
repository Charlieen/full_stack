// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import cmpFixedTwo from '@/components/cmp-fixed-two'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { cmpFixedTwo },
  template: '<div><router-view/><cmp-fixed-two/></div>'
})