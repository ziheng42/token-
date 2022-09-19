import axios from './axios'

export const app = (datas)=>{
    return axios({
        url:'/app/login',
        method:'post',
        data:datas
    })
}
export const login = (datas)=>{
    return axios({
        url:'/app/token',
        method:'post',
        data:datas
    })
}