<template>
  <el-card class="articles">
      <bread-crumb slot="header">
        <template slot="title">文章列表</template>
      </bread-crumb>
      <el-form style="padding-left:50px">
          <el-form-item label="文章状态:">
              <el-radio-group v-model="searchForm.status">
                  <el-radio :label="5">全部</el-radio>
                  <el-radio :label="0">草稿</el-radio>
                  <el-radio :label="1">待审核</el-radio>
                  <el-radio :label="2">审核通过</el-radio>
                  <el-radio :label="3">审核失败</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="频道列表:">
              <el-select placeholder="请选择频道" v-model="searchForm.channel_id">
                  <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label ="时间选择:" >
              <el-date-picker v-model="searchForm.dateRange" type="daterange"></el-date-picker>
          </el-form-item>
      </el-form>
      <el-row class="total">
          <span>共找到10000条符合条件的内容</span>
      </el-row>
      <div class="article-item" v-for="item in 100" :key="item">
          <div class="left">
              <img src="../../assets/img/default.jpg" alt="">
              <div class="info">
                  <span>哈哈哈哈哈哈</span>
                  <el-tag class="tag">标签一</el-tag>
                  <span class="date">2019-12-24 15:07:01</span>
              </div>
          </div>
          <div class="right">
              <span><i class="el-icon-edit"></i>修改</span>
              <span><i class="el-icon-delete"></i>删除</span>

          </div>
      </div>
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
      channels: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels()
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
