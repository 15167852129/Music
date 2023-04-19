<template>
  <div class="tab-bar-item" >
    <div @click="itemClick" 
    :class="{active:isActive}"
    class="itemClick"><slot></slot></div>
    <div class="border-div">
      <span :class="{border:isActive}"></span>
    </div>
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
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  padding-left:20px;
  font-family: 黑体;
}

.tab-bar-item:hover{
  cursor:pointer;
}

.active{
  font-weight:700; 
  font-size: 18px;
}

.tab-bar-item .itemClick{
  margin-top: 23px;
}

.border-div{
  margin-top: 5px;
  padding: 0px 8px;
}
.border{
  display: block;
  height: 2px;
  background-color: brown;
}
</style>