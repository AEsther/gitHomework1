import Vue from 'vue'
import App from './App'

var VueRouter=require("vue-router");
var VueResource=require("vue-resource");
var RouterConfig=require("./config");
Vue.use(VueRouter)
Vue.use(VueResource)
var router=new VueRouter();

RouterConfig(router)
router.start(App,"#apps")

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
