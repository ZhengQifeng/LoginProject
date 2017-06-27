/* 引入vue和主页 */
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-default/index.css'
import ElementUi from 'element-ui'
import App from './App.vue'

Vue.use(ElementUi);

Vue.config.productionTip = false; 
/* 实例化一个vue */
new Vue({
 el: '#app',
 components:{
 	'my-app':App
 }
})
 