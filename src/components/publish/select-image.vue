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
    <el-tab-pane label="上传图片" name="upload">
        <el-upload action="" :http-request="uploadImg" :show-file-list="false" class="upload-img">
            <i class="el-icon-plus"></i>
        </el-upload>
    </el-tab-pane>
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
    uploadImg (params) {
      let data = new FormData()
      data.append('image', params.file)
      this.$axios({
        method: 'post',
        url: '/user/images',
        data
      }).then(result => {
        // this.loading = false
        this.$emit('selectOneImg', result.data.url)
      })
    },
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
    .upload-img {
        display: flex;
        justify-content: center;
        i {
            font-size: 50px;
        padding: 50px;
        border: 1px dashed #ccc;
        border-radius: 4px;
        }
    }
</style>
