import axios from "axios"

//封装axios

const request = axios.create({
    baseUrl:process.env.VUE_APP_BASE_API, //基础路径
    // baseUrl:"/", //基础路径
    timeUrl:5000, //请求超时5000
})

//请求拦截器
request.interceptors.request.use(config => {
    //请求的拦截
    return config;
},error => {
    //出现异常抛出 ES6写法
    return Promise.reject(error) 
})

//响应拦截器
request.interceptors.response.use(response => {
    //响应拦截
    return response;
},error => {
    //出现异常抛出 ES6写法
    return Promise.reject(error);
})

// request.get("/db.json").then(item=>{
//     const data = item.data;
//     console.log(data)
// })

//导出自定义创建的axios
export default request