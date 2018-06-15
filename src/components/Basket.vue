<template>
  <div id="wrap_catalog">
      <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="top_pane">
            <div class="top_pane_wrap" v-show="basketState">
                <p class="top_pane_text">Ваша корзина: </p>
                <p class="top_pane_count">{{ content.length }} товара</p>
            </div>
        </div>
        <div class="basket-main_wrap_content">
            <div class="basket-wrap_content" v-if="basketState">
                <div class="basket-content-wrap-body">
                    <div class="basket-content">
                        <div class="basket-content_item" v-for="item in content" :key="item.name">
                            <div class="basket-content_item_wrap">
                                <img :src="item.main_photo.photo"/>
                                <div class="text">
                                    <p class="name">{{item.mark.name}} {{ item.name }}</p>
                                    <p class="descript-basket">{{ item.description.text }}</p>
                                    <p class="more">Подробнее о товаре</p>
                                </div>
                                <div class="price_wrap">
                                    <p class="price">{{ item.price }} Руб</p>
                                </div>
                                <div class="basket_but_wrap">
                                    <div class="basket_but" @click="deletFromBasket(item.id)">
                                        <img class="basket_but_img" src="../assets/img/cancel.svg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-control-wrap" v-show="basketState">
                    <div class="content-control">
                        <p class="control-text">Ваш заказ:</p>
                        <p class="sum">
                            <span class="sum-span">{{ content.length }}</span> 
                            товара на сумму 
                            <span class="sum-span">{{ main_sum }}</span>
                                Руб
                        </p>
                        <button class="buy" @click="buyClick()">ОФОРМИТЬ</button>
                    </div>
                </div>
            </div>
            <p class="empty-basket-text" v-else>Ваша корзина пуста</p>
        </div>
        <app-soc-cop></app-soc-cop>
        <div class="over" v-if="popup" @click="closePopup()"></div>
        <app-order v-if="popup" v-on:closeOrder="closeOrder()" :orderList="content"></app-order>
        <div class="over-order-buy-send" v-if="orderBuySendCheck" @click="closeOrderConfirm()"></div>
        <transition name="fade">
        <app-order-buy-send v-if="orderBuySendCheck" v-on:closeOrderBuySend="closeOrderConfirm()"></app-order-buy-send>
        </transition>
  </div>
</template>

<script>
import SocialCopir from './SocialCopir.vue'
import Order from './Order.vue'
import OrderBuySend from './OrderBuySend.vue'
export default {
  name: 'Basket',
  data () {
    return {
        popup: false,
        content: [],
        main_sum: 0,
        orderBuySendCheck: false,
    }
  },
  methods: {
        buyClick() {
            this.popup = true;
        },
        closePopup() {
            this.popup = false;
        },
        closeOrder() {
            this.popup = false;
            this.orderBuySendCheck = true;
            var self = this;
            setTimeout(function(){
                self.orderBuySendCheck = false;
            }, 2000);
        },
        deletFromBasket(item_id) {
            for (let elem in this.content) {
                if (this.content[elem].id === item_id) {
                    this.content.splice(elem, 1)
                    localStorage.setItem('basket', JSON.stringify(this.content));
                    this.$store.dispatch('checkBasket');
                }
            }
        },
        closeOrderConfirm() {
            this.orderBuySendCheck = false;
        },
  },
  components: {
      'AppSocCop': SocialCopir,
      'AppOrder': Order,
      'AppOrderBuySend': OrderBuySend,
  },
  mounted() {
      this.content = JSON.parse(localStorage.getItem('basket'));
  },
  watch: {
      content(newContent, oldContent) {
          this.main_sum = 0
          for (let item of this.content) {
              this.main_sum += item.price
          }
      }
  },
  computed: {
    basketState(){
      return this.$store.state.basketState
    }
  },
  beforeCreate(){
        $.fn.fullpage.destroy('all');
    },
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

.basket-main_wrap_content{
    position: absolute;
    top: 27vh;
    width: 100%;
    height: 50%;
}
.basket-wrap_content{
    width: 74%;
    min-width: 1000px;
    margin: auto;
    height: 100%;
}
.basket-content-wrap-body{
    width:100%;
    height: 78%;
    overflow-y: auto;
}
.top_pane_wrap{
    width: 74%;
    min-width: 1000px;
    margin: auto;
}
.top_pane_text{
    font-family: TextProLight;
    font-size: 12pt;
    float: left;
}
.top_pane_count{
    font-size: 12pt;
    font-family: TextProMedium;
    float: left;
    margin-left: 5px;
}
.content-control-wrap{
    width:100%;
    height: auto;
    float: left;
    margin-top: 20px;
}
.content-control{
    width:97.5%;
    height:auto;
    float:left;
    text-align: right;
}
.basket-content{
    display: grid;
    width: 100%;
    height: auto;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fit, 50%);
    grid-template-rows: repeat(auto-fit);
}
.basket-content_item{
    float: left;
    height: 80px;
    margin-bottom: 20px;
}
.basket-content_item_wrap{
    width:95%;
    height: 100%;
    background-color: rgba($color: gray, $alpha: 0.1)
}
.basket-content_item_wrap img{
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
}
.text p{
    line-height: 1;
}
.name{
    font-family: TextProMedium;
    font-size: 12pt;
    margin-bottom: 0;
    margin-top: 10px;
}
.descript-basket{
    font-family: TextProLight;
    font-size: 10pt;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 8px;
    margin-bottom: 0;
}
.more{
    font-size: 12pt;
    font-family: TextProLight;
    color: gray;
    text-decoration: underline;
    margin-top: 8px;
    cursor: pointer;
}
.price{
    padding-top: 15px;
    color: #cba35d;
    font-size: 12pt;
    font-family: TextProMedium;
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
    cursor: pointer;
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
    font-size: 12pt;
    font-family: TextProMedium;
}
.sum-span{
    font-size: 14pt;
    font-family: TextProMedum;
}
.sum{
    font-size: 12pt;
    font-family: TextProLight;
}
.buy{
    background-color: #cf3835;
    font-size: 12pt;
    font-family: TextProMedium;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 10px;
    cursor: pointer;
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
.basket-content-wrap-body::-webkit-scrollbar {
    width: 10px;
}

.basket-content-wrap-body::-webkit-scrollbar-track {
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}

.basket-content-wrap-body::-webkit-scrollbar-thumb {
    background-color: rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}
.empty-basket-text{
    font-size: 25pt;
    font-family: TextProMedium;
    color: #cccccc;
    padding-top: 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.over-order-buy-send{
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    z-index: 998;
}
</style>