import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router
