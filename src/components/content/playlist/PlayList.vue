<template>
  <div>
    <div class="play">
      <play-list-item v-for="(item, index) in play" v-if="index <= 9"
                      :play-item="item" />
    </div>
  </div>
</template>

<script>

  import PlayListItem from './PlayListItem.vue';
  export default {
    components:{
      PlayListItem
    },
    props:{
      play:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.play{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>