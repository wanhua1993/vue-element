<template>
  <div class="wh_back">
    <p>爱吃番茄柿后台管理</p>
    <div class="wh_inputBox">
      <el-input v-model="username" placeholder="请输入用户名" class="wh_input"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="wh_input"></el-input>
      <el-row class="wh_row">
        <el-button type="danger" @click="loginIn()">确认登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      loginIn: function (){
        if(!this.username && !this.password) {
          this.$alert('用户名密码输入有误！', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `请输入正确的用户名密码！`
              });
            }
          });
        } else {
          this.$router.push('/index');
        }
      }
    }
  }
</script>

<style scoped>
  .wh_back {
    position: relative;
    background: cornflowerblue;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .wh_back p {
    position: absolute;
    top: 300px;
    left: 50%;
    width: 400px;
    margin-left: -200px;
    color: #fff;
    font-size: 30px;
  }
  .wh_inputBox {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -200px;
    padding: 10px;
    width: 400px;
    height: 200px;
    border-radius: 4px;
    border: 1px solid #fff;
  }
  .wh_input {
    margin-top: 20px;
  }
  .wh_row {
    margin-top: 20px;
  }
</style>
