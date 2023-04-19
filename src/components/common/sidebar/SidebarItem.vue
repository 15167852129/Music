<template>
  <div class="sidenar-item" @click="itemClick">
      <div :class="{active:isActive}"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .sidenar-item div{
    width: 186px;
    height: 36px;
    margin-bottom: 2px;
    border-radius: 5px;
    line-height: 36px;
    font-family: 黑体;
  }
  .sidenar-item div:hover{
    background-color: #f6f6f7;
  }

  .active{
    background-color: #f6f6f7;
    font-weight:700;
  }
</style>