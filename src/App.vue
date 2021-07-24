<template>
  <div id="app" >
    <navi/>
    <home/>
  </div>
</template>

<script>

import home from './components/home.vue'
import navi from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    home,
    navi
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: #050004;
    width: 100%;
    min-height: 100vh;
  }

  .primary-color{
    color: rgb(189, 0, 129);
  }
</style>
