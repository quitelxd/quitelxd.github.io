import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    /* has token*/
    if (to.path === '/login') {
        next({path: '/'})
    } else {
        if (store.state.user.token === '') {
            next({...to, replace: true})
        } else {
            next()
        }
    }
})

