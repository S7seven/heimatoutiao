<template>
  <el-row class='layout-header' type='flex' align="middle">
      <el-col class='left' :span="12">
          <i class='el-icon-s-fold'></i>
          <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col class="right" :span="12">
          <el-row type='flex' justify="end" align="middle">
              <img :src="!userInfo.photo ? userInfo.photo : defaultImg" alt="">
              <el-dropdown @command="clickMenu">
                  <span>{{userInfo.name}}</span>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="info">个人信息</el-dropdown-item>
                      <el-dropdown-item command="git">git地址</el-dropdown-item>
                      <el-dropdown-item command="goout">退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/kj.jpg')
    }
  },
  created () {
    this.$axios({
      url: './user/profile'
    }).then(result => {
      this.userInfo = result.data
    })
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/S7seven/heimatoutiao'
      } else {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .layout-header {
        height: 60px;
        background-color: rgb(124, 218, 255);
        .left {
            font-size: 20px;
            span {
                font-size: 16px;
                margin-left: 4px;
            }
        }
        .right {
           img {
                width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
           }
        }
    }
</style>
