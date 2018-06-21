<template>
    <div id='map'></div>
</template>
<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoia2l0YW5nZWxvdiIsImEiOiJjamd1aHZncTMxMjF6MndtcWdjZGZhY2g1In0.s4vQ4pbKkTCpKt6psOPxMw';
export default {
    name: 'Map',
    data () {
        return{
        }
    },
    mounted () {
        var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [39.2328268, 51.7002724],
            zoom: 14,
            hash: false,
            container: 'map'
        });
        map.scrollZoom.disable();
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-left');
        var el = document.createElement('div');
            el.className = 'marker';

            var marker = new mapboxgl.Marker(el)
            .setLngLat([39.2328268, 51.7002724])
            .addTo(map);
    },
}
</script>
<style <style lang="scss">

#map {
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 9;
}
.mapboxgl-canvas{
    left:0;
    height: 100% !important;
    width: 100% !important;
    top:0;
}
.marker{
    background-image: url('../assets/img/geo.svg');
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
}
.mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right{
    display: none !important;
}
.mapboxgl-ctrl-top-left{
    top: 50%;
    margin-top: -50px;
    left: 30px;
}
.mapboxgl-ctrl{
    border-radius: 0;
    background-color: rgba($color: #ffffff, $alpha: 1);
}
.mapboxgl-ctrl-zoop-in{

}
</style>


