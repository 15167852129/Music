<template>
  <div class="play-list-songs">
    <div class="songs-nav">
        <span class="title">标题</span>
        <span class="singer">歌手</span>
        <span class="album">专辑</span>
        <span class="time">时间</span>
      </div>
    <div v-for="(item, index) in allsong" 
      @dblclick="addsongtoplay(item)">
      <ul>
        <li class="list-songs" :class="{odd:(index + 1) % 2 === 1}">
          <span class="Number">{{ SongsNumber( index+1 ) }}</span>
          <span class="songs-name">{{ item.songs[0].name }}
            <span class="icon iconfont1" v-if="item.songs[0].fee === 1">vip</span>

            <span class="icon iconfont2" v-if="item.songs[0].fee === 1">试听</span>

            <span class="icon SQ"
                  v-if="item.privileges[0].downloadMaxbr === 999000">SQ</span>

            <span class="icon mv" v-if="item.songs[0].mv !== 0" 
                  @click="mvdetail(item.songs[0].mv)">mv <img src="@/assets/img/mv.png" alt=""> </span>
          </span>
          <span class="songs-singer">{{ item.songs[0].ar[0].name }}</span>
          <span class="songs-album">{{ item.songs[0].al.name }}</span>
          <span class="Time">{{ Duration(item.songs[0].dt) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getsongurl } from '@/network/playlist'
  import { mapGetters } from 'vuex';

  import { formatDuration } from "@/common/utils.js";
  export default {
    name:'PlayListSongs',
    data(){
      return{
        songs:{}
      }
    },
    methods:{
      addsongtoplay(item){
        console.log(item);
        // console.log(item);
        // if (item.data.songs[0].noCopyrightRcmd !== null) {
        //   this.$message.error('因版权问题，该歌曲已下架')
        // }else{
        //   console.log(item);
        //   // getsongurl(item.songs[0].id).then(res=>{
            
        //   // })
        // }
      },
      SongsNumber(index){
        if(index < 10){
          return "0" + index
        }else{
          return index
        }
      },
      Duration(data){
        return formatDuration(data)
      },
      mvdetail(id){}
    },
    computed:{
      ...mapGetters(['song']),
      allsong(){
        return this.song.filter(item =>{
          return item
        })
      }
    }
  }
</script>

<style scoped>
.songs-nav{
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #888888;
  font-size: 13px;
  position: relative;
}

.title{
  position: absolute;
  left: 58px;
}

.singer{
  position: absolute;
  left: 683px;
}

.album{
  position: absolute;
  left: 1005px;
}

.time{
  position: absolute;
  left: 1414px;
}
.list-songs{
  background-color: #ffffff;
  height: 35px;
  line-height: 35px;
  font-size: 10px;
  position: relative;
}

.list-songs:hover{
  background-color: #f2f2f3;
}
.odd{
  background-color: #fafafa;
}

.list-songs .Number{
  color: #b2b2b2;
  padding:0px 15px 0px 30px;
}

.list-songs .songs-name{
  color: black;
  display: inline-block;
  /* font-family: 宋体; */
  width: 625px;

  position: absolute;
  overflow: hidden;
}

.list-songs .songs-singer{
  color: black;
  display: inline-block;
  width: 325px;

  position: absolute;
  left: 683px;
  overflow: hidden;
}

.list-songs .songs-album{
  color: black;
  display: inline-block;
  width: 607px;

  position: absolute;
  left: 1005px;
  overflow: hidden;
}
.list-songs .Time{
  color: black;
  display: inline-block;
  position: absolute;
  left: 1414px;
}

.sqicon{
  width: 24px;
  height: 26.4px;
  position: relative;
  top: 8.2px;
  margin-left: 5px;
}

.icon{
  display: inline-block;
  margin-right: 5px;
  padding: 0px 1px;

  border-radius: 3px;
  font-size: 10px;
  
  height: 18px;
  line-height: 18px;
  text-align: center;
}

.SQ{
  font-family: 方正舒体;
  color: #da4f49; 
  border: 1px solid #da4f49;
  width: 22px;
}

.mv{
  color: #da4f49; 
  border: 1px solid #da4f49;
}
.mv img{
  padding: 1px 0px;
}

.iconfont1{
  color: #ec7140; 
  border: 1px solid #ec7140;
  width: 22px;
  
}
.iconfont2{
  color: #da4f49; 
  border: 1px solid #da4f49;
}

</style>