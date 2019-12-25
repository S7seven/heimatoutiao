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
                        <i class="el-icon-star-off"></i>
                        <i class="el-icon-delete-solid"></i>
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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    changeTab () {
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.cativeName === 'collect'
        }
      }).then(result => {
        this.list = result.data.results
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
            }
        }
    }
</style>
