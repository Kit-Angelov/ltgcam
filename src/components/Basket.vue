<template>
  <div id="wrap_catalog">
      <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="top_pane">
            <div class="top_pane_wrap">
                <p class="top_pane_text">Ваша корзина: </p>
                <p class="top_pane_count">{{ count }} товара</p>
            </div>
        </div>
        <div class="main_wrap_content">
            <div class="wrap_content">
                <div class="content">
                    <div class="content_item" v-for="item in content" :key="item.name">
                        <div class="content_item_wrap">
                            <img src="../assets/img/camera.jpg"/>
                            <div class="text">
                                <p class="name">{{ item.name }}</p>
                                <p class="descript">{{ item.descrip }}</p>
                                <p class="more">Подробнее о товаре</p>
                            </div>
                            <div class="price_wrap">
                                <p class="price">{{ item.price }} Руб</p>
                            </div>
                            <div class="basket_but_wrap">
                                <div class="basket_but">
                                    <img class="basket_but_img" src="../assets/img/cancel.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-control-wrap">
                    <div class="content-control">
                        <p class="control-text">Ваш заказ:</p>
                        <p class="sum">
                            <span class="sum-span">{{ count }}</span> 
                            товара на сумму 
                            <span class="sum-span">{{ sum }}</span>
                             Руб
                        </p>
                        <button class="buy" @click="buyClick()">ОФОРМИТЬ</button>
                    </div>
                </div>
            </div>
        </div>
        <app-soc-cop></app-soc-cop>
        <div class="over" v-if="popup" @click="closePopup()"></div>
        <app-order v-if="popup"></app-order>
  </div>
</template>

<script>
import SocialCopir from './SocialCopir.vue'
import Order from './Order.vue'
export default {
  name: 'Basket',
  data () {
    return {
        count: 4,
        sum: 60000,
        popup: false,
        content: [
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            }
        ]
    }
  },
  methods: {
        buyClick() {
            this.popup = true;
        },
        closePopup() {
            this.popup = false;
        },
  },
  components: {
      'AppSocCop': SocialCopir,
      'AppOrder': Order,
  }
}
</script>

<style lang="scss" scoped>

.back_catalog{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
}
.top_pane{
    position:absolute;
    width: 100%;
    top: 20vh;
}

.main_wrap_content{
    position: absolute;
    top: 27vh;
    width: 100%;
    min-height: 80px;
    max-height: 350px;
}
.wrap_content{
    width: 74%;
    min-width: 1000px;
    margin: auto;
    height: 100%;
    overflow-y: auto;
}
.top_pane_wrap{
    width: 74%;
    min-width: 1000px;
    margin: auto;
}
.top_pane_text{
    font-size: 0.8em;
    float: left;
}
.top_pane_count{
    font-size: 0.8em;
    font-weight: bold;
    float: left;
    margin-left: 5px;
}
.content-control-wrap{
    width:100%;
    height: auto;
    float: left;
    margin-top: 10px;
}
.content-control{
    width:97.5%;
    height:auto;
    float:left;
    text-align: right;
}
.content{
    display: grid;
    width: 100%;
    height: auto;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    grid-template-rows: repeat(auto-fit);
}
.content_item{
    float: left;
    height: 80px;
    margin-bottom: 20px;
}
.content_item_wrap{
    width:95%;
    height: 100%;
    background-color: rgba($color: gray, $alpha: 0.1)
}
.content_item_wrap img{
    width: 130px;
    height: 100%;
    object-fit: cover;
    float:left;
}
.text{
    width: 35%;
    height: 100%;
    text-align: left;
    float: left;
    margin-left: 10px;
    padding-top: 9px;
}
.text p{
    line-height: 0.4;
}
.name{
    font-weight: bold;
    font-size: 0.8em;
}
.descript{
    font-size: 0.7em;
}
.more{
    font-size: 0.7em;
    color: gray;
    text-decoration: underline;
}
.price{
    padding-top: 19px;
    color: #cba35d;
    font-size: 0.8em;
    font-weight: bold;
}
.price_wrap{
    float:left;
    width: 20%;
    height: 100%;
    text-align: center;
}
.basket_but_wrap{
    width: 40px;
    height: 100%;
    float: right;
}
.basket_but{
    margin-top: 29px;
    width: 20px;
    height: 20px;
    float: left;
    background-color:#cf3835;
}
.basket_but:hover{
    background-color: #ce4c4c;
}
.basket_but:active{
    background-color: #cf3835;
}
.basket_but img{
    width: 10px;
    height: 10px;
    margin-top: 5px;
    margin-left: 5px;
}
.content-control p, span{
    line-height: 0.4;
    margin-top: 0;
}
.control-text{
    font-size: 0.8em;
    font-weight: bold;
}
.sum-span{
    font-size: 1em;
    font-weight: bold;
}
.sum{
    font-size: 0.8em;
}
.buy{
    background-color: #cf3835;
    font-size: 0.8em;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 10px;
}
.buy:hover{
    background-color: #ce4c4c;
}
.buy:active{
    background-color: #cf3835;
}
.wrap_content::-webkit-scrollbar {
    width: 10px;
}

.wrap_content::-webkit-scrollbar-track {
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}

.wrap_content::-webkit-scrollbar-thumb {
    background-color: rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}
.over{
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    z-index: 998;
}
</style>