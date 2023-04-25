import { request } from './request'

//获取用户详细
export function getdetail(uid,cookie){
  return request({
      url:'/user/detail',
      params:{
        uid,
        cookie
      }
  })
}
//获得账号信息
export function getaccount(cookie){
  return request({
      url:'/user/account',
      params:{
        cookie
      }
  })
}

export function getsubcount(cookie){
  //获取用户信息 , 歌单，收藏，mv, dj 数量
  return request({
      url:'/user/subcount',
      params:{
        cookie
      }
  })
}
//获取用户歌单
export function getplaylist(uid,cookie){
  return request({
      url:'/user/playlist',
      params:{
        uid,
        cookie
      }
  })
}
