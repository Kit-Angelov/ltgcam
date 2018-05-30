<template>
    <div id="order">
        <div class="wrap">
            <form>
            <p class="title">Оформление заказа</p>
            <input class="full" placeholder="Имя Фамилия*" required>
            <input class="half" type="e-mail" placeholder="e-mail*" required>
            <input class="half" type="tel" placeholder="телефон*" required>
            <input class="half" placeholder="город/населённый пункт*" required>
            <input class="half" placeholder="почтовый индекс*" required>
            <textarea placeholder="адрес* (улица, номер дома, подъезд, этаж, квартира)" required></textarea>
            <div class="left">
                <p>Заказ на сумму:</p>
                <p>60000 руб.</p>
            </div>
            <div class="right">
                <p class="right_title">Оплата:</p>
                <div class="label label_first" @click="check(true)">
                    <div class="radio">
                        <div class="point" v-if="checked"></div>
                    </div>
                    <p class="label_text">Наложенный платёж</p>
                    <p class="sub_radio_label">[Оплата наличными при получении]</p>
                </div>
                <div class="label label_first" @click="check(false)">
                    <div class="radio">
                        <div class="point" v-if="!checked"></div>
                    </div>
                    <p class="label_text">Банковская карта</p>
                </div>
            </div>
            <div class="but_wrap">
                <button type="submit">ПОДТВЕРДИТЬ</button>
            </div>
            </form>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Order',
    data() {
        return {
            checked: true,
        }
    },
    methods: {
        check(value) {
            this.checked = value
        }
    }
}
</script>
<style lang="scss" scoped>

.wrap{
    width:420px;
    height: 420px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -210px;
    margin-left: -210px;
    background-color: rgba($color: #292929, $alpha: 1);
    z-index: 999;
    border-radius: 15px;
    padding: 35px;
    padding-top:32px;
    text-align: left;
}
.title{
    font-size: 1.2em;
    font-weight: bold;
    margin-top:0;
}
.full{
    width: 97%;
    height:25px;
    background-color: transparent;
    border: 2px solid rgba($color: #ffffff, $alpha: 0.3);
    padding-left: 2%;
    color: white;
    outline: none;
}
.half{
    float:left;
    width: 45%;
    height:25px;
    background-color: transparent;
    border: 2px solid rgba($color: #ffffff, $alpha: 0.3);
    padding-left: 2%;
    margin-top: 17px;
    color: white;
    outline: none;
}
.half:nth-of-type(2n + 1){
    margin-left:15px;
}
textarea{
    width: 96.2%;
    height:55px;
    background-color: transparent;
    border: 2px solid rgba($color: #ffffff, $alpha: 0.3);
    padding-left: 2%;
    color: white;
    outline: none;
    font-size: 1em;
    padding-top:5px;
    margin-top: 17px;
    resize: none;
}
.left{
    width: 50%;
    height: auto;
    float: left;
    text-align: left;
}
.left p{
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0;
}
.left p:nth-of-type(2){
    margin-top:6px;
}
.right{
    width:50%;
    height:auto;
    float:left;
    text-align: left;
}
.right_title{
    font-size: 0.9em;
    font-weight: bold;
}
.right input{
    margin-left:0;
    float:left;
}
.label{
    width: 100%;
    float:left;
    height:40px;
    cursor: pointer;
}
.radio{
    width: 10px;
    height: 10px;
    float:left;
    border-radius: 50%;
    border: 1px solid #cba35d;
    background-color: transparent;
}
.point{
    width: 8px;
    height: 8px;
    margin-top: 1px;
    margin-left: 1px;
    border-radius: 50%;
    background-color: #cba35d;
}
.label_text{
    float: left;
    font-size: 0.8em;
    font-weight: bold;
    margin-top:0;
    margin-left:9px;
    margin-bottom: 0;
}
.sub_radio_label{
    font-size: 0.7em;
    color: gray;
    float:left;
    margin-top:0;
    margin-left: 20px;
}
.but_wrap{
    width: 100%;
    height: auto;
    text-align: center
}
button{
    background-color: #cf3835;
    font-size: 0.8em;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    cursor: pointer;
}
button:hover{
    background-color: #ce4c4c;
}
button:active{
    background-color: #cf3835;
}
</style>

