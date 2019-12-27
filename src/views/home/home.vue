<template>
  <el-carousel :interval="4000" height="600px">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['http://pic1.win4000.com/wallpaper/c/53bdf8d19ec7e.jpg', 'http://picture.ik123.com/uploads/allimg/170821/3-1FR1160213.jpg', 'http://pic1.win4000.com/wallpaper/2019-01-14/5c3c4a20d964b.jpg']
    }
  }
}
</script>

<style lang="less" scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  img {
      width: 100%;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
