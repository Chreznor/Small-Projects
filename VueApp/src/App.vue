<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to='/'>Test</router-link></li>
      <li><router-link to='/edit-page'>Edit</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
  text-decoration: none;
  color: black;
}
</style>
