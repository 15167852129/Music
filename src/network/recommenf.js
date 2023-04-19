import { request } from './request'

export function getbanner(){
  return request({
      url:'/banner'
  })
}
// 推荐歌单
export function getresource(){
  return request({
      url:'/personalized'
  })
}
