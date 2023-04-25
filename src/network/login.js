import { request } from './request'

export function getloginKey(){
  return request({
    url:'/login/qr/key',
    params:{
      timerstamp: new Date().getTime(),
    }
  })
}

export function getloginCreate(key){
  return request({
    url:'/login/qr/create',
      params:{
        qrimg:true,
        key,
        timerstamp: new Date().getTime(),
    }
  })
}

export function getloginCheck(key){
  return request({
    url:'/login/qr/check',
      params:{
        key,
        timerstamp: new Date().getTime(),
        withCredentials: true
    }
  })
}
//登录状态
export function getloginstatus(cookie){
  return request({
    url:'/login/status',
    params:{
      cookie
    }
  })
}