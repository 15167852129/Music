<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in banner">
      <img class="medium" :src="item.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import { getbanner } from '@/network/recommenf'
  export default {
    data(){
      return{
        banner:[]
      }
    },
    created(){
      this.getbanner()
    },
    methods:{
      getbanner(){
        getbanner().then(res =>{
          this.banner = res.banners
        })
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item{
    border-radius: 10px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .medium{
    height: 100%;
    width: 100%;
  }

  .el-carousel>>>.el-carousel__indicator--horizontal .el-carousel__button {
    width: 5px;
    height: 5px;
    background: #99a9bf;
    
    border-radius: 50%;
    opacity: 0.5;
  }

  .el-carousel>>>.el-carousel__indicator--horizontal.is-active .el-carousel__button{
    width: 5px;
    height: 5px;
    background: #ec4141;
    border-radius: 50%;
    opacity: 1;
  }

</style>