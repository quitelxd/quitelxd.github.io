import {login, logout, getInfo} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
    state: {
        token: getToken(),
        name: '',
        roles: [],
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERID(state, payload) {
            state.userID = payload
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        Login({commit}, userInfo) {
            const username = userInfo.username
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid

            setToken('32234234')
            commit('SET_TOKEN', '32234234');
            /*return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })*/
        },
        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(res => {
                    commit('SET_ROLES', res.roles)
                    commit('SET_NAME', user.userName)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 退出系统
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
};
export default user;