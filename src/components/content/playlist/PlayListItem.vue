<template>
  <div class="play-item" @click="imtemCilck">

      <div class="play-cover" @mouseleave="mouseLeave" @mouseover="mouseOver">
        <div class="play-count">
          <img src="@/assets/img/gl-play.png" class="gl-play">{{ playCount }}
        </div>

        <transition name="fade">
          <img src="@/assets/img/play.png" 
            class="play-img" 
            v-if="playimg">
        </transition>
      
        <img :src="playItem.picUrl" class="picUrl">
      </div>
      
      <div class="play-info">
        <p>{{ playItem.name }}</p>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        playimg:false
      }
    },
    props:{
      playItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      playCount(){
        const playCount = this.playItem.playCount
        if(playCount / 10000 < 1){
          return playCount
        }else{
          const wan = playCount /  10000  
          return Math.floor(wan)+ "万";
        }
      }
    },
    methods: {
      mouseLeave(){
        this.playimg = false
      },
      mouseOver(){
        this.playimg = true
      },
      imtemCilck(){
        this.$router.push('/playlist/' + this.playItem.id)
      }
    }
  }
</script>

<style scoped>
.play-item{
  position: relative;
  font-size: 12px;
  font-family: 黑体;
}

.play-cover:hover{
  cursor:pointer;
}

.play-img{
  position: absolute;
  top: 165px;
  right: 10px;
}

.fade-enter{
	opacity: 0;
}

.fade-enter-active{
	transition: opacity 1s;
}

.fade-leave-to{
	opacity: 0;
}
.fade-leave-active{
	transition: opacity 1s;
}

.play-count{
  position: absolute;
  color: #ffffff;
  top: 5px;
  right: 5px;
}

.play-count img{
  width: 10px;
  height: 10pxs;
  margin-right: 5px;
}

.picUrl{
  width: 206px;
  height: 206px;
  border-radius: 5px;
}

.play-info{
  margin-bottom: 20px;
}

.play-info p{
  margin-top: 5px;
  width: 206px;
  color: #333333;
  font-size: 14px;
}

.play-info p:hover{
  color: black;
  cursor:pointer;
}
</style>