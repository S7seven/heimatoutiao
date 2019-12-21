
<template>
<!-- 大容器 -->
  <el-container>
       <!-- 左侧布局 -->
     <el-aside style="height:100vh;background-color:rgb(86, 207, 255);width:230px;  ">
         <layout-aside></layout-aside>
     </el-aside>
      <!-- 右侧布局 -->
     <el-container>
         <el-header>
           <layout-header></layout-header>
         </el-header>
         <el-main>
           <router-view></router-view>
         </el-main>
     </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
