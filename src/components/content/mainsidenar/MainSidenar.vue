<template>
  <sidebar>
    <sidebar-item path="/discover">
      <div>发现音乐</div>
    </sidebar-item>

    <sidebar-item path="/video">
      <div>视频</div>
    </sidebar-item>
  </sidebar>
</template>

<script>
  import Sidebar from 'components/common/sidebar/Sidebar.vue';
  import SidebarItem from 'components/common/sidebar/SidebarItem.vue';
  export default {
    components:{
      Sidebar,
      SidebarItem
    }
  }
</script>

<style  scoped>

</style>