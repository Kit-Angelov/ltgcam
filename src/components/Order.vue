<template>
    <div id="order">
        <div class="wrap">
            <form @submit="buy();$emit('closeOrder')">
            <p class="title">Оформление заказа</p>
            <input class="full" v-model="info.name" placeholder="Имя Фамилия*" required>
            <input class="half" v-model="info.email" type="e-mail" placeholder="e-mail*" required>
            <input class="half" v-model="info.phone" type="tel" placeholder="телефон*" required>
            <input class="half" v-model="info.city" placeholder="город/населённый пункт*" required>
            <input class="half" v-model="info.index" placeholder="почтовый индекс*" required>
            <textarea v-model="info.address" placeholder="адрес* (улица, номер дома, подъезд, этаж, квартира)" required></textarea>
            <div class="left">
                <p>Заказ на сумму:</p>
                <p>{{order_all.sum}} руб.</p>
            </div>
            <!-- <div class="right">
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
            </div> -->
            <div class="but_wrap">
                <button type="submit">ПОДТВЕРДИТЬ</button>
            </div>
            </form>
        </div>
    </div>    
</template>
<script>
import host from './host.js'
export default {
    name: 'Order',
    props: ['orderList'],
    data() {
        return {
            checked: true,
            order_list: this.orderList,
            order_all: {
                sum: 0,
            },
            info: {},
            content: {},
        }
    },
    methods: {
        check(value) {
            this.checked = value
        },
        buy() {
            this.content = JSON.parse(localStorage.getItem('basket'));
            if (this.checked) {
                this.info.pay_var = 'cash'
            } else {
                this.info.pay_var = 'card'
            }
            this.info.product_ids = []
            for (let item of this.order_list) {
                this.info.product_ids.push(item.id)
                for (let elem in this.content) {
                if (this.content[elem].id === item.id) {
                    this.content.splice(elem, 1)
                    localStorage.setItem('basket', JSON.stringify(this.content));
                    this.$store.dispatch('checkBasket');
                }
            }
            }
            this.$http.post(host + 'order_buy', this.info).then(function(response) {
            }, function(error) {
            })
        }
    },
    created() {
        this.order_all.sum = 0;
        for (let item of this.order_list) {
            this.order_all.sum += item.price
        }
    },
}
</script>
<style lang="scss" scoped>

.wrap{
    width:420px;
    height: 380px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -220px;
    margin-left: -210px;
    background-color: rgba($color: #292929, $alpha: 1);
    z-index: 999;
    border-radius: 15px;
    padding: 35px;
    padding-top:32px;
    text-align: left;
}
.title{
    font-size: 14pt;
    font-family: TextProMedium;
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
    font-size: 12pt;
    font-family: TextProLight;
    padding-top:5px;
    margin-top: 17px;
    resize: none;
}
.left{
    width: 100%;
    height: auto;
    float: left;
    text-align: left;
}
.left p{
    font-size: 12pt;
    font-family: TextProMedium;
    margin-bottom: 0;
    float:left;
    margin-right: 10px;
}
.right{
    width:50%;
    height:100px;
    float:left;
    text-align: left;
}
.right_title{
    font-size: 12pt;
    font-family: TextProMedium;
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
    font-size: 12pt;
    font-family: TextProMedium;
    margin-top:0;
    margin-left:9px;
    margin-bottom: 0;
}
.sub_radio_label{
    font-size: 9pt;
    font-family: TextProLight;
    color: gray;
    float:left;
    margin-top:0;
    margin-left: 20px;
}
.but_wrap{
    width: 100%;
    float: left;
    height: auto;
    text-align: center;
    margin-top: 40px;
}
button{
    background-color: #cf3835;
    font-size: 12pt;
    font-family: TextProMedium;
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

