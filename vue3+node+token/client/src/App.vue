<template>
  <div class="main">
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/about">关于</router-link>
    </li>
    <li>
      <router-link to="/login">登录</router-link>
    </li>
  </div>
  <router-view></router-view>
</template>

<style lang="less">
body,
html #app {
  width: 100vh;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
}

.main {
  display: flex;

  li {
    list-style: none;
    margin: 20px;
    color: aqua;

    /*包含以下五种的链接*/
    a {
      text-decoration: none;
      color: rgb(24, 82, 192);
    }

    
  }
}
</style>
