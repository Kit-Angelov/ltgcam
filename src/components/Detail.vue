<template>
    <div id="detail">
        <div class="wrap">
            <div class="galery">
                <img src="../assets/img/camera.jpg">
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Detail',
}
</script>
<style lang="scss" scoped>
#detail{
    position: absolute;
    top: 30vh;
    width: 100%;
    height: 46vh;
}
.wrap{
    width: 74%;
    min-width: 1000px;
    height: 100%;
    margin: auto;
}
.galery{
    width: 45%;
    height: 100%;
    float: left;
}
.galery img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.content{
    width:48%;
    height: 100%;
    float: left;
    margin-left: 7%;
}
</style>

