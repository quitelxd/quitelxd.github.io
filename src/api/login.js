import request from '@/utils/request'


// 登录方法
export function login(username, password, code) {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        params: { username, password, code }
    })
}

// 刷新方法
export function refreshToken(refresh_token) {
    const grant_type = 'refresh_token'
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        params: { grant_type, refresh_token }
    })
}

// 获取用户详细信息
export function getInfo() {
    return request({
        url: '/system/user/getInfo',
        method: 'get'
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/auth/token/logout',
        method: 'delete'
    })
}

// 获取验证码
export function getCodeImg() {
    return request({
        url: '/code',
        method: 'get'
    })
}
