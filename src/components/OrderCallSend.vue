<template>
    <div id="order-call-send">
        <div class="wrap-msg">
            <img class="cross-exit" @click="$emit('closeOrderCallSend')" src="../assets/img/cancel.svg">
            <p>Заявка на звонок отправлена</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderCallSend',
}
</script>
<style lang="scss">
#order-call-send {
    position: fixed;
    z-index: 99999;
    width: 300px;
    height: 60px;
    background-color: #242424;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    margin-top: -50px;
    margin-left: -150px;
    padding: 10px;
}
.wrap-msg{
    width: 100%;
    height: 100%;
    position: relative;
}
.wrap-msg p{
    font-family: TextProLight;
    font-size: 12pt;
    margin-top: 0;
    padding-top: 20px;
}
.cross-exit{
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
</style>
