import { request } from './request'

export function getHotsearch(){
  //因为instance本身就是返回Promise所以可以直接点request
  return request({
    url:'/search/hot/detail'
  })
}