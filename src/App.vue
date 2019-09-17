<template>
  <div id="app">
    <NavBar></NavBar>
    
    <!-- <router-link to="/">Inicio</router-link>
    <router-link to="tasks">Tareas</router-link> -->

    <router-view></router-view>
    <!-- <Dash></Dash> -->
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'
import Dash from './views/Dash.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    Dash
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
