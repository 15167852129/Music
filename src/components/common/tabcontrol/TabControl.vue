<template>
    <tab-bar>
      <tab-play-list v-for="(item, index) in titles"
          @click.native="itemCilick(index)"
          :currentIndex="currentIndex"
          :index="index">
        <div>{{ item }}</div>
      </tab-play-list>
    </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'; 
  import TabPlayList from '@/components/common/tabbar/TabPlayList.vue';
  export default {
    components:{
      TabBar,
      TabPlayList
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemCilick(index){
        this.currentIndex = index
        this.$emit('tabClick', index)
        console.log(this.currentIndex);
      }
    }
  }
</script>

<style scoped>
</style>