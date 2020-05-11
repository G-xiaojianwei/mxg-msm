<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" ref="form" :model="form" label-width="80px">
      <h2 class="login-title">梦学谷后台管理系统</h2>
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//导入login
import {login,getUserInfo} from "@/api/login"

  export default {
    data() {
      return {
        form: {
          name: "",
          password:""
        },
        rules:{
          name:[
            {required:true,message:"请输入账号",trigger:"blur"},
            // {min:3,max:5,message:"请输入3-5位数的账户",trigger:"blur"}
          ],
          password:[
             {required:true,message:"请输入密码",trigger: 'blur'},
            //  {min:3,max:5,message:"请输入3-5位数的密码",trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           //验证成功 将表单提交到后台
          login(this.form.name,this.form.password).then(response => {
            //将获取到的数据存储起来
            const resp = response.data;
            //判断是否正确
            if(resp.flag){
              //通过token获取用户数据
              getUserInfo(resp.data.token).then( response =>{
                 //保存数据
                const respUser = response.data;
                if(respUser.flag){
                  localStorage.setItem("mxg-msm-user",JSON.stringify(respUser.data))
                  localStorage.setItem("mxg-msm-token",resp.data.token)
                  //前往首页
                  this.$router.push("/");
                }else{
                  //未获取到，弹出警告
                  this.$message({
                    showClose: true,
                    message: respUser.message,
                    type: 'warning'
                  });
                }
              })
            }else{
              //未通过，弹出警告
                this.$message({
                  showClose: true,
                  message: resp.message,
                  type: 'warning'
                });
            }

          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
.login-container{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/login.jpg);
}

.login-form{
  width: 350px;
  margin:160px auto;
  background-color: rgba(255, 255, 255, .8);
  padding: 30px;
  border-radius: 10px;
}
.login-title{
  text-align: center;
  padding:30px;
  color: #303133;
}

</style>