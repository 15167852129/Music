<template>
  <div id="app">
    <el-container>
      <!--导航栏-->
        <nav-bar/>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside style="width: 200px;">
          <main-sidenar/>
        </el-aside>
        <!--主页面-->
        <el-main style="margin: 0px 0px; padding: 0px 0px;">

          <keep-alive exclude="PlayList,PlayListSongs">
            <router-view/>
          </keep-alive>

        </el-main>
      </el-container>
      
      <!-- 播放器 -->
      <el-footer style="margin: 0px 0px; padding: 0px 0px;">
        <player id="player"/>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import NavBar from './components/common/navbar/NavBar.vue';
import MainSidenar from './components/content/mainsidenar/MainSidenar.vue';
import player from './components/common/player/Player.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MainSidenar,
    player
  },
  created(){
    
  },
  methods:{}
}
</script>

<style>
@import url(./assets/css/base.css);
.el-footer{
  background-color: aqua;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:99;
}
</style>
