import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import app from './App.vue'
import chart from './components/Chart.vue'
import axios from 'axios'
import echarts from 'echarts'
import VueRouter from 'vue-router'

axios.defaults.baseURL = 'http://www.client.com';
Vue.prototype.$axios=axios;
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(VueRouter)


const routes = [
  { path: '/chart', component: chart }
]

const router = new VueRouter({
  routes
})

new Vue({
    el: '#app',
    render: c => c(app),
    router
})