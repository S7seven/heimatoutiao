<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="素材库" name="material">
        <div class="select-image-list">
            <el-card v-for="item in list" :key="item.id" class="img-card">
                <img @click="clickImg(item.url)" :src="item.url" alt="">
            </el-card>
        </div>
        <el-row type="flex" justify="center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="page.total"
              :current-page="page.currentPage"
              :page-size="page.pageSize"
              @current-change="changePage">
            </el-pagination>
        </el-row>
    </el-tab-pane>
    <el-tab-pane label="上传图片" name="upload">上传图片</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'material',
      list: [],
      page: {
        currentPage: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    clickImg (url) {
      this.$emit('selectOneImg', url)
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getAllImg()
    },
    getAllImg () {
      this.$axios({
        url: '/user/images',
        params: { collect: false, page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getAllImg()
  }
}
</script>

<style lang="less" scoped>
    .select-image-list {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
        .img-card {
            width: 150px;
            height: 150px;
            margin: 20px 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
