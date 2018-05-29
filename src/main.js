import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.use(VueMapbox, { mapboxgl: Mapbox })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
