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
      list: ['http://pic1.win4000.com/wallpaper/c/53bdf8d19ec7e.jpg', 'http://cdn.duitang.com/uploads/item/201112/03/20111203222251_kxerS.jpg', 'http://img2.imgtn.bdimg.com/it/u=3801383457,1361181316&fm=214&gp=0.jpg']
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
