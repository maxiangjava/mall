import Vue from 'vue'
import App from './App.vue'
import {request} from "@/network/request";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('haha');

request({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err =>{
  console.log('err');
})

