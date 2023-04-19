<template>
  <!-- 发现音乐 状态栏 -->
  <el-header>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </el-header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.tab-bar{
  display: flex;
  height: 48px;
  width: 420px;
  margin-top: 0;
  margin-left: 0;
}

.el-header {
  padding: 0px 0px;
}
</style>