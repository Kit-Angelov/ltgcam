<template>
    <div id="social-copir">
        <div class="soc-wrap">
            <div class="soc">
            <a href="https://vk.com/club140813823"><img src="../assets/img/vk.svg"></a>
            <a href="https://www.instagram.com/ltgcam/"><img src="../assets/img/inst.svg"></a>
            <a href="https://www.youtube.com/channel/UCQ_k8FfD7xm6dT4K6MO-yUA?guided_help_flow=3"><img src="../assets/img/yt.svg"></a>
            <a href="https://www.facebook.com/ltgcam/"><img src="../assets/img/fb.svg"></a>
            </div>
            <div class="cop">
                <a href="http://profilaktika.agency">
                    <img src="../assets/img/copir.svg">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SocialCopir",
}
</script>
<style lang="scss">
#social-copir{
    width: 100%;
    height: 30px;
    position: fixed;
    left: 0;
    bottom: 40px;
    z-index: 99;
}
.soc-wrap{
    width: 74%;
    min-width: 1000px;
    height: 100%;
    margin: auto; 
}
.soc{
    width: 50%;
    float:left;
    height: 100%;
    text-align: left;
}
.cop{
    width: 50%;
    float:left;
    height: 100%;
    text-align: right;
}
.soc img{
    width: 15px;
    height: auto;
}
.soc a{
    margin-left: 10px;
}
.cop img{
    width: 100px;
    height: auto;
}
</style>

