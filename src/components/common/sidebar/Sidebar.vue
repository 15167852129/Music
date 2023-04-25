<template>
  <!-- 侧框 -->
  <div class="sidebar">
    <slot></slot>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .sidebar{
    width: 200px;
    height: calc(100vh - 60px - 60px);
    border-right: 1px solid #e0e0e0;
    padding-top: 13px;
    padding-left: 10px;
    overflow-y:hidden;
    white-space: nowrap
  }

  .sidebar:hover{
    overflow-y:scroll;
  }

    .sidebar::-webkit-scrollbar{
      width: 8px;
      height: 1px;
  }
  .sidebar::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: #e0e0e0;
  }

</style>