<template>
  <div class="cover-image">
  <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class="cover-image-item">
    <img :src="item ? item : defaultImg" alt="">
  </div>
  <el-dialog :visible="dialogVisible" @close="closeDialog" title="">
    <select-image @selectOneImg="receiveImg"></select-image>
  </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false,
      selectIndex: -1
    }
  },
  methods: {
    receiveImg (url) {
      this.$emit('selectToeImg', url, this.selectIndex)
      this.closeDialog()
    },
    openDialog (index) {
      this.dialogVisible = true
      this.selectIndex = index
    },
    closeDialog () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .cover-image {
    margin: 20px 100px;
    display: flex;
    .cover-image-item {
      border: 1px solid #ccc;
      width: 250px;
      height: 250px;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
