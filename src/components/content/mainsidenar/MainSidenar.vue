<template>
  <sidebar>
    <sidebar-item path="/discover">
      <div>发现音乐</div>
    </sidebar-item>

    <sidebar-item path="/video">
      <div>视频</div>
    </sidebar-item>

    <div v-if="uid">
      <div class="title">
        <span>我的音乐</span>
      </div>
      <sidebar-item v-for="(item, index) in playlist" 
                    :id="item.id" 
                    v-if="item.specialType === 5">
        
        <div><span class="sidebar-logo"><img src="@/assets/img/love.png" alt=""></span>我喜欢的歌单</div>
      </sidebar-item>

      <div class="title">
        <span>创建的歌单</span>
      </div>
      <sidebar-item v-for="(item, index) in playlist" 
                    :id="item.id" 
                    v-if="item.specialType != 5 && item.creator.nickname === nickname">
        <div><span class="sidebar-logo"><img src="@/assets/img/swt-icon.png" alt=""></span>{{item.name }}</div>
      </sidebar-item>

      <div class="title">
        <span>收藏的歌单</span>
      </div>
      <sidebar-item v-for="(item, index) in playlist" 
                    :id="item.id" 
                    v-if="item.specialType != 5 && item.creator.nickname != nickname">
        <div><span class="sidebar-logo"><img src="@/assets/img/swt-icon.png" alt=""></span>{{item.name }}</div>
      </sidebar-item>
    </div>
  </sidebar>
</template>

<script>
  import Sidebar from 'components/common/sidebar/Sidebar.vue';
  import SidebarItem from 'components/common/sidebar/SidebarItem.vue';

  import { getdetail,getaccount,getsubcount, getplaylist } from '@/network/sidenar';
  export default {
    components:{
      Sidebar,
      SidebarItem
    },
    data(){
      return{
        uid: sessionStorage.getItem('userId'),
        cookie: sessionStorage.getItem('cookie'),
        nickname:sessionStorage.getItem('nickname'),
        playlist:[]
      }
    },
    created(){
      // this.getdetail(),
      // this.getaccount(),
      // this.getsubcount(),
      this.getplaylist()
    },
    methods:{
      // getdetail(){
      //   //获取用户详细
      //   getdetail(this.uid,this.cookie).then( res=>{
      //     console.log(res);
      //   })
      // },
      // getaccount(){
      //   //获得账号信息
      //   getaccount(this.cookie).then(res =>{
      //     console.log(res);
      //   })
      // },
      // getsubcount(){
      //   //获取用户信息 , 歌单，收藏，mv, dj 数量
      //   getsubcount(this.cookie).then(res =>{
      //     console.log(res);
      //   })
      // },
      getplaylist(){
        //获取用户歌单
        getplaylist(this.uid,this.cookie).then( res=>{
          this.playlist = res.playlist
          // console.log(this.playlist);
        })
      }
    }
  }
</script>

<style  scoped>
.title{
  height: 36px;
  line-height: 36px;
}
span{
  font-size: 12px;
  color: #999999;
}

.sidebar-logo{
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0px 5px 0px 5px;
}

img {
  vertical-align: middle;
}
</style>