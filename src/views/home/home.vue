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
      list: ['http://pic1.win4000.com/wallpaper/2018-08-28/5b84a6f5cd954.jpg', 'http://2e.zol-img.com.cn/product/61_940x705/74/ceUky8sQVCuo.jpg', 'http://d.hiphotos.baidu.com/zhidao/pic/item/8718367adab44aed853eeff3b31c8701a18bfbb1.jpg']
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
