<template>
    <div class="main">
        <div>
            {{denglu}}
        </div>
        <div class="btn" @click="Login">登录</div>
    </div>
</template>
<script setup>
import { app } from "@/axios/index";
import { ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
const router = useRouter()
const denglu = ref('请登录')

const Login = () => {
    app({
        name: 'ziheng'
    }).then((res) => {
        let { token } = res.data
        localStorage.setItem('token', token)
        router.push('/')
    })
}
</script>
<style lang="less" scoped>
.main{
    margin: 20px;
    display: flex;
    .btn{
        margin-left: 20px;
        color: rgb(39, 228, 199);
        cursor: pointer;
    }
}
</style>