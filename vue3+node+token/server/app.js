const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    //当axios配置了withCredentials， 需要设置具体的地址，以及credentials
    origin:"http://localhost:8080",
    credentials: true
}))
//处理数据中间件
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//路由监听
app.use("/", require('./router/index'))

app.listen(3000, () => {
    console.log('服务器开启：localhost:3000');
})