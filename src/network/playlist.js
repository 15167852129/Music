import { request } from './request'

//获取相关歌单
export function getplaylist(id,cookie){
  return request({
    url:'/playlist/detail',
    methods: "GET",
    params:{
        id,cookie
    }
  })
}

//获取歌曲详情
export function  getsongdetail(ids) {
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}

export function getsongurl(id) {
  return request({
      url:'/song/url',
      params:{
          id
      }
  })
}

//获取歌单评论
export function getplaylistcomment(id,limit,offset) {
  return request({
      url:'/comment/playlist',
      params:{
          id,
          limit,
          offset
      }
  })
}

    //用于获取精彩评论
export function gethotcomment(id,limit) {
  return request({
    url:'/comment/playlist',
    params:{
      id,
      limit
    }
  })
}