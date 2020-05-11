<template>
  <div class="header">
    <a href="/" class="logo">
      <img  src="@/assets/logo.png" alt="" width="25px">
      <span class="compony">梦雪谷后台管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-promotion" command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {logout} from "@/api/login"

export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
      handleCommand(command){
        switch(command){
          case "a":
            alert("点击了修改密码");
            break;
          case "b":
            const token = localStorage.getItem("mxg-msm-token");
            logout(token).then( response => {
              const resp = response.data;
              if(resp.flag){
                //退出成功
                //清除本地数据
                localStorage.removeItem("mxg-msm-token");
                localStorage.removeItem("mxg-msm-user");
                //回到登录页面
                this.$router.push("/login");
              }else{
                this.$message({
                  message:resp.message,
                  type:"warning"
                })
              }
            })
            break;
        }
      }
  }
}
</script>

<style scoped>
.logo,.logo img{
    display:inline-block;
    vertical-align: middle;
    color:#fff;
    text-decoration: none;
}
.logo img{
    margin:0 10px 5px 40px;
}
.el-dropdown{
    float: right;
    margin-right:40px;
    cursor:pointer;
    color:#fff;
}
</style>