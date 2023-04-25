<template>
  <div v-if="path" class="sidenar-item" @click="itemClick">
      <div :class="{active:isActive}"><slot></slot></div>
  </div>

  <div v-else-if="id" class="sidenar-item" @click="idClick">
      <div :class="{idActive:idActive}"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    props:{
      path:String,
      id:Number
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      idActive(){
        return this.$route.path.indexOf(this.id) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      },
      idClick(){
        this.$router.push('/playlist/' + this.id)
        this.reload();
      }
    }
  }
</script>

<style scoped>
  .sidenar-item div{
    width: 174px;
    height: 36px;
    margin-bottom: 2px;
    border-radius: 5px;
    line-height: 36px;
    font-family: 微软雅黑;
    color: #333333;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sidenar-item{
    font-size: 14px;
  }

  .sidenar-item div:hover{
    background-color: #f6f6f7;
  }

  .active{
    background-color: #f6f6f7;
    font-weight:700;
    font-size: 16px;
    font-family: 微软雅黑;
    color: #000;
  }
  .idActive{
    background-color: #f6f6f7;
  }
</style>