module.exports ={
    devServer:{
        port: 80, //端口号，如果端口号被占用，就会自动增1
        host: "localhost", //主机名
        https: false, //https协议
        open: true, //启动服务器时自动打开浏览器
        proxy:{ //只实用于开发环境代理配置
            [process.env.VUE_APP_BASE_API]:{
                //目标服务器地址，代理访问
                target:process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,//开启代理服务器
                pathRewrite:{
                    //将请求地址前缀"/dev-api"替换为空的
                    // "^/dev-api":""
                    ["^"+process.env.VUE_APP_BASE_API]:""
                }
            }
        }
    },
    lintOnSave:false,//关闭格式校验
    productionSourceMap: false //打包时不会生成.map文件
}