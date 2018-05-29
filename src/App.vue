<template>
  <div id="app">
    <app-menu></app-menu>
    <!-- <app-main></app-main> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
// import Main from './components/Main.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    AppMenu: Menu,
    // AppMain: Main,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

p, a, span, h1, h2, button{
  font-size: 12pt;
  color: white;
  line-height: 1.3;
}
</style>
