import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'
import store from './store'

Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: store,
  data: {
    server: 'http://localhost:8000/',
  }
})
