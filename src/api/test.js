//导入自定义的axios
import request from "@/utils/request"

// request .get("/db.json").then(response => {
//     console.log(response.data)
// })

//下面的写法等价于上面的

//测试2，以对象配置的方式进行指定请求方式
// request({
//     method:"get",
//     url:"/db.json"
// }).then( response => {
//     console.log(response.data)
// })

export default {
    getList(){
        const req = request({
            method:"get",
            url:"/db.json"
        })
        return req;
    }
}