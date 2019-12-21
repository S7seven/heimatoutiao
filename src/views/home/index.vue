
<template>
<!-- 大容器 -->
  <el-container>
       <!-- 左侧布局 -->
     <el-aside style="height:100vh;background-color:rgb(86, 207, 255);width:230px;">
         <layout-aside></layout-aside>
     </el-aside>
      <!-- 右侧布局 -->
     <el-container>
         <el-header>头部</el-header>
         <el-main>主要区域</el-main>
     </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style lang="less" scoped>
</style>
