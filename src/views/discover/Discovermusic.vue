<template>
  <div class="discovermusic">
    <main-tab-bar class="main-tab-bar"/>

    <el-main id="main" style="margin: 0px 0px; padding: 0px 0px;">
        <router-view />
    </el-main>
    
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/maintabbat/MainTabBar.vue';
  export default {
    components:{
      MainTabBar
    }
  }
</script>

<style scoped>
.discovermusic{
  position: relative;
}
.main-tab-bar{
  padding-left: 25px;
}
</style>