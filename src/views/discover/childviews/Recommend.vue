<template>
  <div class="recommenf">
    <!-- 轮播图 -->
    <carousel/>

    <!-- 推荐歌单 -->
    <span @click="playbtn">推荐歌单
      <img src="@/assets/img/go.png" alt="">
    </span>
    <play-list :play="showPlay"/>

  </div>
</template>

<script>
  import Carousel from '@/components/common/carousel/Carousel.vue';
  import PlayList from '@/components/content/playlist/PlayList.vue';

  import { getresource } from '@/network/recommenf'
  export default {
    components:{
      Carousel,
      PlayList
    },
    data(){
      return{
        play:[]
      }
    },
    created(){
      this.getresource()
    },
    methods:{
      playbtn(){
        //跳转到歌单路由
        this.$router.push("play")
      },
      getresource(){
        getresource().then(res =>{
          this.play = res.result
        })
      }
    },
    computed:{
      showPlay(){
        return this.play
      }
    }
  }
</script>

<style scoped>
.recommenf{
  width: 1100px;
  position: absolute;
  left: 310px;
}

.recommenf span{
  display: flex;
  margin-bottom: 10px;
  margin-left: 5px;

  height: 32px;
  width: 120px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  color: #333333;
}

.recommenf span:hover{
  color: black;
  cursor:pointer;
}
</style>