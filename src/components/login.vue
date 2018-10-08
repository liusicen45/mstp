<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="0px">
      <div class="login">
        <h2>SIGN IN NOW</h2>
        <div class="login-wrap">
          <el-form-item label="">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-col :span="24" class="remember">
            <el-checkbox v-model="checked">记住我</el-checkbox>
            <span>忘记密码？</span>
          </el-col>
          <el-col :span="24">
            <div class="login-btn" @click="login">登录</div>
          </el-col>
          <el-col :span="24" class="register">
            还没有账号？ <router-link to="/register" tag="span">注册一个帐户</router-link>
          </el-col>
        </div>
      </div>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push('/homepage')
    }
  }
}
</script>

<style scoped>
  .el-container{
    justify-content: center;
    /* align-items: center; */
    padding: 100px;
    height: 100%;
  }

  .el-form-item{
    margin-bottom: 15px;
  }

  .login{
    border-radius: 10px;
    width: 330px;
    height: 400px;
    background-color: #fff;
  }

  h2{
    padding: 20px 15px;
    background-color: #41cac0;
    text-align: center;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
  }

  .login-wrap{
    padding: 10px 20px;
  }

  .login-btn{
    margin-top: 15px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #f67a6e;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0 4px #e56b60;
    margin-bottom: 20px;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
  }

  .login-btn:hover{
    background: #fc7756;
  }

  .remember{
    display: flex;
    justify-content: space-between;
  }

  .remember span, .register span{
    font-size: 14px;
    color: #41cac0;
    cursor: pointer;
  }

  .remember span:hover, .register span:hover{
    color: #f67a6e;
  }

  .register{
    font-size: 14px;
    color: #666;
  }
</style>
