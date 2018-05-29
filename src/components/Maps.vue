<template>
    <div id='maps'>
        <mapbox
        access-token='pk.eyJ1Ijoia2l0YW5nZWxvdiIsImEiOiJjamd1aHZncTMxMjF6MndtcWdjZGZhY2g1In0.s4vQ4pbKkTCpKt6psOPxMw'
        :map-options="{
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-96, 37.8],
        zoom: 3
        }">
        </mapbox>
    </div>
</template>
<script>
import Mapbox from 'mapbox-gl-vue';
// mapboxgl.accessToken = 'pk.eyJ1Ijoia2l0YW5nZWxvdiIsImEiOiJjamd1aHZncTMxMjF6MndtcWdjZGZhY2g1In0.s4vQ4pbKkTCpKt6psOPxMw';
export default {
    name: 'Maps',
    components: {
        'mapbox': Mapbox
    },
}
</script>
<style scoped>
#map {
  width: 100%;
  height: 500px;
}
#maps {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9;
}
</style>


