<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  background-color: #f1f2f7;
  display: flex;
}
</style>
