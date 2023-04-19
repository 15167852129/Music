<template>
  <div class="play-list">
    
    <play-list-nav :data="showPlay" class="play-list-nav" />

    <div class="list">
      <tab-control :titles="['歌曲列表','评论'+'('+ data.commentCount +')','收藏者']" @tabClick="tabClick" ref="tabControl"/>
      <play-list-songs v-if="currentType === 'list'"/>
      <play-list-comments v-if="currentType === 'comments'"/>
      <play-list-collection v-if="currentType === 'collection'"/>
    </div>
  </div>
</template>

<script>
  import PlayListNav from "./childviews/PlayListNav.vue";
  import PlayListSongs from "./childviews/PlayListSongs.vue";
  import PlayListComments from "./childviews/PlayListComments.vue";
  import PlayListCollection from "./childviews/PlayListCollection.vue";

  import TabControl from "@/components/common/tabcontrol/TabControl.vue";

  import { getplaylist,getsongdetail } from '@/network/playlist'

  export default {
    name:'PlayList',
    components:{
      PlayListNav,
      PlayListSongs,
      TabControl,
      PlayListComments,
      PlayListCollection
    },
    data(){
      return{
        id:0,
        data:{
          creator:{}
        },
        trackids:[],
        key:null,
        ids:[],

        currentType: 'list',
      }
    },

    created(){
      this.init()
      
    },

    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'list'
            break;
          case 1:
            this.currentType = 'comments'
            break;
          case 2:
            this.currentType = 'collection'
            break;
        }
        this.$refs.tabControl.currentIndex  = index
        // console.log(this.$refs.tabControl.currentIndex);
      },
      init(){
        //歌单id
        this.id = this.$route.params.id
        
        //歌单的详细信息
        getplaylist(this.id).then(res =>{
          this.data = res.playlist
          //所有歌曲id
          this.trackids = this.data.trackIds
        }).
        //把所有歌曲id放入到变量ids
        then(()=>{
          for (let index = 0; index < this.trackids.length; index++) {
            this.ids[index] = this.trackids[index].id
          }

          let promise = null
          //通过.map的方式把ids传给item
          promise = this.ids.map(item => {
            return new Promise((resolve) => {
              //请求歌曲详细信息的网络请求
              getsongdetail(item).then(res=>{
                resolve(res)
              })
            })
          })
          Promise.all(promise).then(res => {
            this.$store.commit('cleansong')
            for(let song of res){
              this.$store.commit('pushallsong',song)
            }
          })
        })
      }
    },
    activated(){
      console.log(1);
    },
    deactivated(){
      console.log(2)
    },
    computed:{
      showPlay(){
        return this.data
      },
    }
  }
</script>

<style scoped>
.play-list{
  height: calc(100vh - 60px - 60px);
  overflow: hidden;
  overflow-y:scroll;
}
.play-list-nav{
  margin-top: 30px;
  margin-left: 30px;
}
</style>