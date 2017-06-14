<template>
  <div>
    <header>
      <head-top msg="Login"></head-top>
    </header>
    <main>
      <el-form class="login-form" :model="loginForm" :rules="loginRule" ref="loginForm" label-width="100px">
        <el-form-item label="姓名：" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-col>
          <el-col :span="6">
            <el-button @click="goToPage('register')">注册</el-button>
          </el-col>
        </el-row>
      </el-form>
    </main>
  </div>
</template>
<script>
  import headTop from '@/components/head/head'
  import {getLogin} from '../../service'
  import {mapMutations} from 'vuex'
  export default {
    components: {
      headTop
    },
    data () {
      let checkUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRule: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        },
        userInfo: null
      }
    },
    methods: {
      ...mapMutations([
        'RECODE_USERINFO'
      ]),
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      goToPage (pageName) {
        this.$router.push(pageName)
      },
      login () {
        getLogin(this.loginForm)
          .then(res => {
            let data = res.data
            if (data.status === 0) {
              // 新用户注册
              this.$message({
                message: '用户不存在，请先注册',
                type: 'warning'
              })
              setTimeout(() => {
                this.goToPage('register')
              }, 1000)
            } else if (data.status === 1) {
              // 登录成功
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.userInfo = {
                name: this.loginForm.username
              }
              console.log(this.userInfo)
              this.RECODE_USERINFO(this.userInfo)
              setTimeout(() => {
                this.goToPage('home')
              }, 500)
            } else if (data.status === 2) {
              // 用户名或密码错误
              this.$message.error('用户名或密码错误')
            }
          })
      }
    }
  }
</script>
<style scoped>
  .login-form {
    width: 540px;
    margin: 50px auto 0;
    padding: 30px 50px;
  }
</style>
