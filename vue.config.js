module.exports ={
    devServer:{
        port: 80, //端口号，如果端口号被占用，就会自动增1
        host: "localhost", //主机名
        https: false, //https协议
        open: true //启动服务器时自动打开浏览器
    },
    lintOnSave:false,//关闭格式校验
    productionSourceMap: false //打包时不会生成.map文件
}