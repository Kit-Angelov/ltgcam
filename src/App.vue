<template>
  <div id="app">
    <app-menu></app-menu>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    AppMenu: Menu,
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: TextCompProBold;
    src: url('./assets/fonts/PFDinTextCompPro-Bold.ttf') format('truetype');
}
@font-face {
    font-family: TextCompProMedium;
    src: url('./assets/fonts/PFDinTextCompPro-Medium.ttf') format('truetype');
}
@font-face {
    font-family: TextCompProReg;
    src: url('./assets/fonts/PFDinTextCompPro-Regular.ttf');
}
@font-face {
    font-family: TextProBold;
    src: url('./assets/fonts/PFDinTextPro-Bold.ttf');
}
@font-face {
    font-family: TextProLight;
    src: url('./assets/fonts/PFDinTextPro-Light.ttf');
}
@font-face {
    font-family: TextProMedium;
    src: url('./assets/fonts/PFDinTextPro-Medium.ttf');
}
@font-face {
    font-family: TextProThin;
    src: url('./assets/fonts/PFDinTextPro-Thin.ttf');
}
@font-face {
    font-family: TextProCondBold;
    src: url('./assets/fonts/PfDinTextCondProBold.ttf');
}
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
