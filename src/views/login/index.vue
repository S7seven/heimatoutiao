<template>
  <div class="login">
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <el-form ref="myForm" :model="loginForm" :rules="loginRules">
              <el-form-item prop="mobile">
                  <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input v-model="loginForm.code" style="width:68%" placeholder="验证码"></el-input>
                    <el-button plain style="float:right">发送验证码</el-button>
              </el-form-item>
              <el-form-item prop="check">
                  <el-checkbox v-model="loginForm.check" >我已阅读并同意用户协议隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入你的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('阅读后同意协议才可以登录哦'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 校验通过，调用接口登录
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            // 前端缓存，登陆成功返回给我们令牌
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '手机号或验证码错误！'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .login {
        background-image: url(../../assets/img/back.jpg);
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-card {
        width: 440px;
        height: 350px;
        opacity: 0.6;
        .title {
            text-align: center;
            margin-bottom: 30px;
            img {
                height: 30px;
            }
        }
        }

    }

</style>
