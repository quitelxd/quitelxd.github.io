import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/aboutUs',
        component: () => import( '../views/Home'),
        children: [{
            path: '',
            component: () => import( '../views/aboutUs'),
        }]
    },
    {
        path: '/privacyPolicy',
        component: () => import( '../views/Home'),
        children: [{
            path: '',
            component: () => import( '../views/privacyPolicy'),
        }]
    },
    {
        path: '/',
        component: () => import( '../views/Home'),
        redirect: '/home/ldzs',
    }, {
        //首页度壳
        path: '/home',
        component: () => import( '../views/Home'),
        redirect: '/home/ldzs',
        children: [{
            //联动值守
            path: 'ldzs',
            component: () => import( '../views/ldzs/ldzs'),
        }]
    }, {
        path: '/util',
        component: () => import( '../views/util'),
    },
    {
        path: '/login',
        component: () => import('../views/login')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

const originalPush = VueRouter.prototype.push
// 统一处理重复跳转导致的路由报错。
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router
