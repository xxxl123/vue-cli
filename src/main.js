import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
// import rank from './store/rank'
import 'echarts'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "element-ui"


Vue.config.productionTip = false
Vue.use(ElementUI);
/* Vue.config.productionTip = false */
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'


import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'

import $ from 'jquery'

window.jQuery = $
window.$ = $


router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next()
})
new Vue({
    render: h => h(App),
    router,
    store,
    // rank
    echarts
}).$mount('#app')
