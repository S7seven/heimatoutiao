<template>
  <el-card class="articles">
      <bread-crumb slot="header">
        <template slot="title">文章列表</template>
      </bread-crumb>
      <el-form style="padding-left:50px">
          <el-form-item label="文章状态:">
              <el-radio-group v-model="searchForm.status" @change="changeCondition">
                  <el-radio :label="5">全部</el-radio>
                  <el-radio :label="0">草稿</el-radio>
                  <el-radio :label="1">待审核</el-radio>
                  <el-radio :label="2">审核通过</el-radio>
                  <el-radio :label="3">审核失败</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="频道列表:">
              <el-select placeholder="请选择频道" @change="changeCondition" v-model="searchForm.channel_id">
                  <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label ="时间选择:" >
              <el-date-picker value-format="yyyy-MM-dd" @change="changeCondition" v-model="searchForm.dateRange" type="daterange"></el-date-picker>
          </el-form-item>
      </el-form>
      <el-row class="total">
          <span>共找到{{page.total}}条符合条件的内容</span>
      </el-row>
      <div class="article-item" v-for="item in list" :key="item.id.toString()">
          <div class="left">
              <!-- {{item}} -->
              <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt="">
              <div class="info">
                  <span>{{item.title}}</span>
                  <el-tag :type="item.status | filterType" class="tag">{{item.status | filterStatus}}</el-tag>
                  <span class="date">{{item.pubdate}}</span>
              </div>
          </div>
          <div class="right">
              <span @click="toModify(item.id)"><i class="el-icon-edit"></i>修改</span>
              <span @click="delMaterial(item.id)"><i class="el-icon-delete"></i>删除</span>
          </div>
      </div>
      <el-row type='flex' justify="center" align="middle" style="height:60px">
        <el-pagination background layout="prev, pager, next"
        :total="page.total"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        @current-change="changPage"
        ></el-pagination>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      channels: [],
      list: [],
      defaultImg: require('../../assets/img/default.jpg'),
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  filters: {
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'

        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  methods: {
    toModify (id) {
      this.$router.push(`/home/publish/${id.toString()}`)
    },
    delMaterial (id) {
      this.$confirm('是否要删除该文章?').then(() => {
        this.$axios({
          method: 'delete',
          url: `/articles/${id.toString()}`
        }).then(result => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getConditionArticle()
        })
      })
    },
    changPage (newPage) {
      this.page.currentPage = newPage
      this.getConditionArticle()
    },
    changeCondition () {
      this.page.currentPage = 1
      this.getConditionArticle()
    },
    getConditionArticle () {
      let params = {
        page: this.page.currentPage,
        per_page: this.page.pageSize,
        status: this.searchForm.status === 5 ? null : this.searchForm.status,
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange.length ? this.searchForm.dateRange[0] : null,
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null
      }
      this.getArticles(params)
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getChannels()
    this.getArticles({ page: 1, per_page: 10 })
  }
}

</script>

<style lang="less" scoped>
    .articles {
        .total {
            height: 40px;
            border-bottom: 1px dashed #ccc;
        }
        .article-item {
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            border-bottom: 1px solid #f2f3f5;
            .left {
                display: flex;
                img {
                    width: 150px;
                    height: 100px;
                    border-radius: 4px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    flex-direction: column;
                    justify-content: space-around;
                    .date {
                        color: #999;
                        font-size: 12px
                    }
                    .tag {
                        text-align: center;
                        width: 60px;
                    }
                }
            }
            .right {
                span {
                    font-size: 14px;
                    margin-right: 8px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
