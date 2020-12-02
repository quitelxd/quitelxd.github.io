import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/changeElementUI.less';
import './assets/css/main.less';
import './permission' // 登录控制 control
Vue.use(ElementUI);
import Block from './components/Block';
Vue.component("Block",Block);
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
