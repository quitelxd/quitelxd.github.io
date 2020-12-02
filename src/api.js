//配置请求信息 封装请求方法
import axios from 'axios'
import store from "./store";

let http = axios.create({
    baseURL: 'http://www.baidu.com:8080/', //请求头
    withCredentials: false, //跨域
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'token': store.state.token || ''
    },
});

function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        response(res);
    }).catch(function (err) {
        response(err);
    })
}

export default {
    get: function (url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}