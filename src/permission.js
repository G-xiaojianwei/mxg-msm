//导入路由
import router from '@/router/index.js'
import {getUserInfo} from "@/api/login.js"

/*
权限拦截：router.beforeEach((to,from,next)=>{})
to:即将要进入的目标（路由对象）
from:当前导航正要离开的路由
next：函数 
*/

router.beforeEach((to,from,next)=>{
    //获取token
    const token = localStorage.getItem("mxg-msm-token");

    if(!token){
        //如果没有获取到
        //要访问非登录页面，不让，跳转到登录页面
        if(to.path!=="/login"){
            next({path:"/login"})
        }else{
            //访问登录页面
            next();
        }
    }else{
        if(to.path === "/login"){
            next();
        }else{
            //查看是否有用户信息
            const userInfo=localStorage.getItem("mxg-msm-user")
            if(userInfo){
                next();
            }else{
                //获取用户信息
                getUserInfo(token).then(response=>{
                    const resp = response.data;
                    //判断是否获取到数据
                    if(resp.flag){
                        //保存到本地
                        localStorage.setItem(JSON.stringify(resp,data));
                        next();
                    }else{
                        next({path:"/login"})
                    }
                })
            }
        }
    }
})