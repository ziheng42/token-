<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="dianji">dianji </button>
  </div>
</template>
<script setup>
import { app, login } from "@/axios/index";
function dianji(){
  login().then(res=>{
    console.log(res);
  })
}
</script>
