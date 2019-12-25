<template>
  <el-card>
      <bread-crumb slot="header">
      <template slot="title">
          素材管理
      </template>
      </bread-crumb>
      <el-tabs v-model="activeName" @tab-click="changeTab">
          <el-tab-pane label="全部图片" name="all">
              <div class="img-list">
                  <el-card class="img-card" v-for="item in list" :key="item.id">
                      <img :src="item.url " alt="">
                      <el-row class="operate" type="flex" align="middle" justify="space-around">
                        <i @click="collect0rCancel(item)" :style="{ color: item.is_collected ? 'red' : '#000'}" class="el-icon-star-off"></i>
                        <i @click="delMaterial(item.id)" class="el-icon-delete-solid"></i>
                      </el-row>
                  </el-card>
              </div>
          </el-tab-pane>
          <el-tab-pane label="收藏图片" name="collect">
            <div class="img-list">
                  <el-card class="img-card" v-for="item in list" :key="item.id">
                      <img :src="item.url " alt="">
                  </el-card>
              </div>
          </el-tab-pane>
      </el-tabs>
      <el-row type="flex" justify="center">
        <el-pagination background layout="prev, pager, next"
        :total="page.total"
        :page-size="page.pageSize"
        :current-page="page.currentPage"
        @current-change="changePage">
        </el-pagination>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        total: 0,
        pageSize: 8,
        currentPage: 1
      }
    }
  },
  methods: {
    delMaterial (id) {
      this.$confirm('您确定要删除此图片吗?').then(() => {
        this.$axios({
          method: 'delete',
          url: `user/images/${id}`
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    collect0rCancel (item) {
      this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected
        }
      }).then(result => {
        this.getMaterial()
      })
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.cativeName === 'collect'
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoprd>
    .img-list {
        display:flex;
        flex-wrap: wrap;
        .img-card {
            position: relative;
            width: 200px;
            height: 220px;
            margin: 20px 50px;
            img {
                width: 100%;
                height: 100%;
            }
            .operate {
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                font-size: 20px;
                height: 36px;
                background-color: #f4f5f6;
                i {
                  cursor: pointer;
                }
            }
        }
    }
</style>
