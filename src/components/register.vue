<template>
  <el-container>
    <el-form ref="form" :model="form" :rules="rules" label-width="0px">
      <div class="register">
        <h2>REGISTRATION NOW</h2>
        <div class="register-wrap">
          <el-col :span="24" class="msg">
            请在下面输入您的个人信息
          </el-col>
          <el-form-item label="" prop="username">
            <el-input v-model.trim="form.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model.trim="form.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="againPas">
            <el-input v-model.trim="form.againPas" type="password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="six">
            <!-- <el-switch v-model="form.six">男</el-switch>
            <el-switch v-model="form.six">女</el-switch> -->
            <el-radio-group v-model="form.six">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-col :span="24" class="msg">
            请在下面输入您的详细信息
          </el-col>
          <el-form-item label="" prop="name">
            <el-input v-model.trim="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="address">
            <el-input v-model.trim="form.address" placeholder="请输入地址"></el-input>
          </el-form-item>
          <el-form-item label="" prop="email">
            <el-input v-model.trim="form.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-col :span="24" class="remember">
            <el-checkbox v-model="form.checked"></el-checkbox>
            <span>我同意服务条款和隐私政策</span>
          </el-col>
          <el-col :span="24">
            <input type="button" :disabled="!form.checked" class="login-btn" @click="submit('form')" value="注册">
          </el-col>
          <el-col :span="24" class="login">
            已经注册。 <router-link :to="{name: 'login', path: '/login'}" tag="span">登录</router-link>
          </el-col>
        </div>
      </div>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        checked: false,
        username: '',
        password: '',
        againPas: '',
        six: '',
        email: '',
        name: '',
        address: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写账号', trigger: 'blur' },
          { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 4, max: 12, message: '长度在 6 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        againPas: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: ['blur', 'change'] }
        ],
        six: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请填写邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
          // { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请填写地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-container{
    justify-content: center;
    /* align-items: center; */
    padding: 1rem;
    height: 100%;
  }

  .el-form-item{
    margin-bottom: 15px;
  }

  .register{
    border-radius: 10px;
    width: 330px;
    height: 700px;
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

  .register-wrap{
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
    width: 100%;
    border: none;
    outline: none;
  }

  .login-btn[disabled]{
    box-shadow: 0 4px rgba(229, 107, 96, .8);
    background: rgba(246, 122, 110, .8);
    color: #bbb;
    cursor: not-allowed;
  }

  .login-btn:hover{
    background: #fc7756;
  }

  .login-btn[disabled]{
    background:  rgba(246, 122, 110, .9);
  }

  .msg{
    color: #999;
    margin-bottom: 15px;
    user-select: none;
  }

  .remember span, .register span{
    font-size: 14px;
    color: #555353;
    cursor: pointer;
  }

  .login{
    font-size: 14px;
    color: #666;
  }

  .login span{
    font-size: 14px;
    color: #41cac0;
    cursor: pointer;
  }
</style>
