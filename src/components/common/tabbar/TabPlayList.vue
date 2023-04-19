<template>
  <div class="tab-play-list">
    <div :class="{active:isActive}"
        class="itemClick"><slot></slot>
    </div>
    <div class="border-div">
      <span :class="{border:isActive}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      currentIndex:Number,
      index:Number
    },
    computed:{
      isActive(){
        return  this.currentIndex === this.index
      }
    }
  }
</script>

<style scoped>
.tab-play-list{
  padding-left:20px;
  font-family: 黑体;
}

.tab-play-list:hover{
  cursor:pointer;
}

.active{
  font-weight:700; 
  font-size: 18px;
}

.tab-play-list .itemClick{
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