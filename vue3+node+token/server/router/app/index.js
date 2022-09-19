const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const key = 'zheshiyitiaoshenqidetianlu'

router.post('/login', (req, res) => {
    let {name} = req.body
    let token = jwt.sign({
        name:name
    },
    key,
    {
        expiresIn:'7d'
    })
    res.send({
        token:token
    })
})
router.post('/token',(req, res)=>{
    let token = req.headers.authorization
    token = token.split(' ')[1]
    try {
        const Token = jwt.verify(token, key) 
        //数据库查询
        //返回前端
        res.send({
            code:0,
            msg:'登录成功'
        })
    } catch (error) {
        res.send(401)
    }
})
module.exports = router