<template>
  <div>
    <header>
      <head-top msg="Register"></head-top>
    </header>
    <main>
      <el-form class="register-form" :model="registerForm" :rules="registerRule" ref="registerForm" label-width="100px">
        <el-form-item label="姓名：" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPassword">
          <el-input type="password" v-model="registerForm.checkPassword"></el-input>
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
          </el-col>
          <el-col :span="6">
            <el-button @click="goToPage('login')">登录</el-button>
          </el-col>
        </el-row>
      </el-form>
    </main>
  </div>
</template>
<script>
  import headTop from '@/components/head/head.vue'
  import {getRegister} from '../../service'
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
          if (this.registerForm.checkPassword !== '') {
            this.$refs.registerForm.validateField('checkPassword')
          }
          callback()
        }
      }
      let validatePassword2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      }
      return {
        registerForm: {
          username: '',
          password: '',
          checkPassword: ''
        },
        registerRule: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validatePassword2, trigger: 'blur' }
          ]
        },
        userInfo: null
      }
    },
    methods: {
      ...mapMutations([
        'RECODE_USERINFO'
      ]),
      goToPage (pageName) {
        this.$router.push(pageName)
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      register () {
        getRegister(this.registerForm)
          .then(res => {
            let data = res.data
            if (data.status === 0) {
              // 该用户已注册
              this.$message({
                message: '该用户已存在',
                type: 'warning'
              })
              this.resetForm('registerForm')
            } else if (data.status === 1) {
              // 注册成功
              this.$message('注册成功')
              this.userInfo = {
                name: this.registerForm.username
              }
              this.RECODE_USERINFO(this.userInfo)
              setTimeout(() => {
                this.goToPage('home')
              }, 500)
            } else if (data.status === 2) {
              // 两次密码不正确
              this.$message.error('两次密码输入不一致')
            }
          })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style scoped>
  .register-form {
    width: 540px;
    margin: 50px auto 0;
    padding: 30px 50px;
  }
</style>
