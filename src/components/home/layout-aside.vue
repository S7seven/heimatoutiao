<template>
  <div class='layout-aside'>
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <el-menu style="background-color:rgb(86, 207, 255)">
          <el-menu-item>首页</el-menu-item>
          <el-submenu index="1">
              <template slot="title">内容管理</template>
              <el-menu-item>发布文章</el-menu-item>
              <el-menu-item>文章列表</el-menu-item>
              <el-menu-item>评论管理</el-menu-item>
              <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
           <el-submenu index="2">
              <template slot="title">粉丝管理</template>
              <el-menu-item>图文数据</el-menu-item>
              <el-menu-item>粉丝概况</el-menu-item>
              <el-menu-item>粉丝画像</el-menu-item>
              <el-menu-item>粉丝列表</el-menu-item>
          </el-submenu>
          <el-menu-item>账户信息</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .layout-aside {
     width: 230px;
      .el-menu{
          border-right:none;
      }
      .title {
          background-color: rgb(124, 218, 255);
          text-align: center;
          padding: 10px 0;
          img {
              height: 35px;
          }
      }
 }
</style>
