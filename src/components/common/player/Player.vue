<template>
  <div class="player">
    <div  v-for="(item, index) in allsong">
      <!-- {{ item }} -->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data(){
      return{
        songs:{}
      }
    },
    computed:{
      ...mapGetters(['song']),
      allsong(){
        return this.song.filter(item =>{
          return item
        })
      }
    }
  }
</script>

<style scoped>
</style>