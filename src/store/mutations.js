export default {
  pushallsong(state,payload){
    state.song.push(payload)
  },
  //清空歌单详细信息
  cleansong(state){
    state.song = []
  },
  clear(state){
    for(let i in state){
      delete state[i]
    }
  },

}