<template>
  <tab-bar>
    <tab-bar-item path="recommend" class="recommend">
      <div>个性推荐</div>
    </tab-bar-item>
    
    <tab-bar-item path="play" class="play">
      <div>歌单</div>
    </tab-bar-item>

    <tab-bar-item path="list" class="list">
      <div>排行榜</div>
    </tab-bar-item>

    <tab-bar-item path="singer" class="singer">
      <div>歌手</div>
    </tab-bar-item>

    <tab-bar-item path="latestmusic" class="latestmusic">
      <div>最新音乐</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue';
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';
  export default {
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
.recommend{
  width: 72px;
  padding: 0px;
  text-align: center;

}
.play{
  width: 36px;
  padding-left: 0px;
  margin-left: 20px;
  text-align: center;

}
.list{
  width: 54px;
  padding-left: 0px;
  margin-left: 20px;
  text-align: center;

}

.singer{
  width: 36px;
  padding-left: 0px;
  margin-left: 20px;
  text-align: center;
}

.latestmusic{
  width: 72px;
  padding-left: 0px;
  margin-left: 20px;
  text-align: center;
}
</style>