<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">
            评论管理
        </template>
      </bread-crumb>
      <el-table :data="list">
          <el-table-column prop ="title" width="600" label="标题"></el-table-column>
          <el-table-column :formatter="foematterBoolean" prop ="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop ="total_comment_count" label="评论总数"></el-table-column>
          <el-table-column prop ="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="obj">

              <el-button size="small" type="text">修改</el-button>
              <el-button @click="openOrCloseState(obj.row)" size="small" type="text">{{ obj.row.comment_status ? '关闭' : '打开' }}评论</el-button>
           </template>
          </el-table-column>
      </el-table>
      <el-row type='flex' justify="center" align="middle" style="height:80px">
        <el-pagination background layout="prev, pager, next"
        :total="page.total"
        :page-size="page.pageSize"
        :current-page="page.currentPage"
        @current-change="changePage"></el-pagination>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getComment()
    },
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    },
    foematterBoolean (row, colum, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    openOrCloseState (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你确定要${mess}评论吗？`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(result => {
          debugger
          this.getComment()
        }).catch(() => {
          debugger
        })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
