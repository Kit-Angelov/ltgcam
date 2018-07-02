<template>
  <div id="wrap_catalog">
      <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="top_pane">
            <div class="wrap_top_pane">
                <div class="navigate_text">
                    <p class="title_text" @click="toCatalog()">Видеорегистраторы</p>
                    <p class="selectet_text" @click="toCatalog()">&rarr; {{category_choses}}</p>
                    <p class="detail_name" v-if="detail">&rarr; {{choose_item.name}}</p>
                </div>
                <div class="navigate_select" v-if="!detail">
                    <!-- <select v-model="category_choses">
                        <option v-for="cat in category" :value="cat.name" :key="cat.id">{{cat.name}}</option>
                    </select> -->
                    <div class="select_mark" @mouseover="opening_select()" @mouseout="closing_select()">
                        <p class="selected_mark_name">{{category_choses}}</p>
                        <p class="arrow_down">&#8964;</p>
                        <transition name="fade">
                        <div v-if="open_select" class="option_mark">
                            <p v-for="cat in category" :key="cat.id" @click="select_mark(cat)">{{cat.name}}</p>
                        </div>
                        </transition>
                    </div>
                    <p class="navigate_select_title">Марка автомобиля:</p>
                </div>
            </div>
        </div>
        <app-detail v-if="detail" :itemId="item_id" v-on:popup="buyOneClick()" v-on:tobasket="addToBasket(choose_item)"></app-detail>
        <div class="main_wrap_content" v-else>
            <div class="wrap_content">
                <div class="content">
                <div class="content_item" v-if="item.mark.name == category_choses" v-for="item in auto_models" :key="item.name">
                    <div class="content_item_wrap">
                        <div class="non-hover-item" @click="detailview(item)">
                            <table>
                                <tr>
                                    <td>
                                        <p>{{item.name | capitalize}}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <img :src="item.main_photo.photo" @click="detailview(item)"/>
                        <div class="text" @click="detailview(item)">
                            <p class="cat-name">{{ item.mark.name }} {{item.name}}</p>
                            <p class="cat-descript">{{ item.description.text }}</p>
                            <p class="cat-price">{{ item.price }} Руб.</p>
                        </div>
                        <div class="basket_but_wrap">
                            <div class="basket_but" @click="addToBasket(item)">
                                <img class="basket_but_img" src="../assets/img/add.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> 
        <div class="over" v-if="popup" @click="closePopup()"></div>
        <app-order v-if="popup" v-on:closeOrder="closeOrder()" :orderList="order"></app-order>
        <app-soc-cop></app-soc-cop>
        <div class="over-added" v-if="added" @click="closeAdded()"></div>
        <transition name="fade">
        <app-added v-if="added" v-on:closeAdded="closeAdded()"></app-added>
        </transition>
        <div class="over-order-buy-send" v-if="orderBuySendCheck" @click="closeOrderConfirm()"></div>
        <transition name="fade">
        <app-order-buy-send v-if="orderBuySendCheck" v-on:closeOrderBuySend="closeOrderConfirm()"></app-order-buy-send>
        </transition>
  </div>
</template>

<script>
import Detail from './Detail.vue';
import Order from './Order.vue';
import SocialCopir from './SocialCopir.vue';
import vSelect from 'vue-select';
import Added from './Added.vue';
import host from './host.js';
import OrderBuySend from './OrderBuySend.vue'
export default {
  name: 'Catalog',
  components: {
      'AppDetail': Detail,
      'AppOrder': Order,
      'AppSocCop': SocialCopir,
      'vselect': vSelect,
      'AppAdded': Added,
      'AppOrderBuySend': OrderBuySend,
  },
  data () {
    return {
        detail: false,
        popup: false,
        added: false,
        category: [],
        basket: [],
        category_choses: '',
        auto_models: [],
        item_id: null,
        choose_item: {},
        order: [],
        orderBuySendCheck: false,
        open_select: false,
    }
  },
  mounted () {
      this.$http.get(host + 'marks/').then(function(response) {
          this.category = response.data;
          console.log(response)
      }, function(error) {
          console.log(error)
      });

      this.$http.get(host + 'auto_model/').then(function(response) {
          this.auto_models = response.data;
          console.log(response)
      }, function(error) {
          console.log(error)
      });

      this.category_choses = this.$route.params.mark
  },
  watch: {
        '$route' (to, from) {
            this.category_choses = this.$route.params.mark
            this.detail = false
            this.item_id = this.$route.params.id
            if (this.item_id) {
                this.detail = true;
            }
        }
    },
  methods: {
        select_mark(mark) {
            this.category_choses = mark.name
            this.$router.push({path: '/catalog/' + this.category_choses});
        },
        opening_select() {
            this.open_select = true
        },
        closing_select() {
            this.open_select = false
        },
        buyOneClick() {
            this.popup = true;
            let order_item = JSON.parse(localStorage.getItem('order'));
            this.order = []
            this.order.push(order_item);
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
        closeAdded() {
            this.added = false;
        },
        detailview(choosen_item){
            this.$router.push({path: '/catalog/' + choosen_item.mark.name + '/' + choosen_item.id});
            this.choose_item = choosen_item;
        },
        toCatalog() {
            this.detail = false;
            this.$router.push({path: '/catalog/' + this.choose_item.mark.name});
        },
        addToBasket(item){
            let curr_basket = JSON.parse(localStorage.getItem('basket'));
            if (curr_basket == null) {
                this.basket = [];
            } else {
                this.basket = curr_basket;
            }
            this.basket.push(item);
            localStorage.setItem('basket', JSON.stringify(this.basket));
            this.$store.dispatch('fillBasket');
            this.added = true;
            var self = this;
            setTimeout(function(){
                self.added = false;
            }, 1000);
        }
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
    },
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
.navigate_text, .navigate_select{
    width: 50%;
    float: left;
}
.navigate_text p {
    float: left;
}
.navigate_select p, .navigate_select select{
    float: right;
}
.navigate_select select{
    width: 150px;
    margin-top: 22px;
    margin-left: 20px;
    font-size: 10pt !important;
}
.navigate_select option{
    font-size: 10pt !important;
}
.main_wrap_content{
    position: absolute;
    top: 40vh;
    width: 100%;
    height: 250px;
}
.wrap_content{
    width: 74%;
    min-width: 1000px;
    margin: auto;
    height: 100%;
    overflow-y: auto;
}
.wrap_top_pane{
    width: 74%;
    min-width: 1000px;
    margin: auto;
}
.content{
    display: grid;
    width: 100%;
    height: auto;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fit, 240px);
    grid-template-rows: repeat(auto-fit);
}
.content_item{
    float: left;
    height: 250px
}
.content_item_wrap{
    width:95%;
    height: 100%;
    cursor: pointer;
    position: relative;
}
.content_item_wrap:hover .non-hover-item{
    -webkit-animation: fadeInFromNone 0.3s;
    -moz-animation: fadeInFromNone 0.3s;
    -o-animation: fadeInFromNone 0.3s;
    animation: fadeInFromNone 0.3s;
    opacity: 0;
}
@-webkit-keyframes fadeInFromNone {
    0% {
        display: block;
        opacity: 0.7;
    }
    100% {
        display: none;
        opacity: 0;
    }
}
.content_item_wrap img{
    width: 100%;
    height: 150px;
    object-fit: cover;
}
.text{
    width: 80%;
    height: 50px;
    text-align: left;
    float: left;
}
.text p{
    line-height: 0.4;
}
.cat-name{
    font-family: TextProMedium;
    font-size: 12pt;
    margin-bottom: 10px;
}
.cat-descript{
    font-family: TextProLight;
    font-size: 11pt;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1 !important;
    margin-top:0;
    margin-bottom:0;
}
.cat-price{
    margin-top: 10px;
    color: #cba35d;
    font-size: 12pt;
    font-family: TextProMedium;
}
.basket_but_wrap{
    width: 20%;
    height: 50px;
    float: left;
}
.basket_but{
    margin-top: 12px;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    float: right;
    background-color:#cf3835;
}
.basket_but:hover{
    background-color: #ce4c4c;
}
.basket_but:active{
    background-color: #cf3835;
}
.basket_but img{
    width: 14px;
    height: auto;
    margin-top: 8px;
}
.over, .over-added{
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    z-index: 998;
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
.title_text{
    font-size: 12pt;
    font-family: TextProLight;
    cursor: pointer;
}
.selectet_text{
    font-size: 12pt;
    font-family: TextProMedium;
    margin-top: 17px;
    margin-left: 3px;
    cursor: pointer;
}
.navigate_select select{
    height: 18px;
    background-color: white;
    border-radius: 4px;
    border: none;
    outline: none;
    padding-top: 2px;
    padding-left: 2px;
    font-size: 12pt;
    font-family: TextProLight;
    cursor: pointer;
}
.navigate_select select option{
    font-size: 12pt;
    font-family: TextProLight;
}
.navigate_select_title{
    font-size: 12pt;
    padding-top: 6px;
    font-family: TextProLight;
}
.detail_name{
    margin-top: 17px;
    margin-left: 3px;
    font-size: 12pt;
    font-family: TextProMedium;
}
.non-hover-item{
    width: 100%;
    height: 150px;
    position:absolute;
    background-color:rgba($color: #ffffff, $alpha: 0.8);
    -webkit-animation: fadeOutFromNone 0.3s;
    -moz-animation: fadeOutFromNone 0.3s;
    -o-animation: fadeOutFromNone 0.3s;
    animation: fadeOutFromNone 0.3s;
    opacity: 0.7;
}
@-webkit-keyframes fadeOutFromNone {
    0% {
        display: none;
        opacity: 0;
    }
    100% {
        display: block;
        opacity: 0.7;
    }
}
.non-hover-item table{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.non-hover-item p{
    font-family: TextProCondBold;
    color: #333333;
    font-size: 24pt;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
.select_mark{
    width: 150px;
    height: 25px;
    float:right;
    margin-top: 18px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: rgba($color: white, $alpha: 0.9);
    position: relative;
    cursor: pointer;
}
.selected_mark_name{
    font-family: TextProLight;
    color: black;
    font-size: 11pt;
    float: left !important;
    margin-top: 5px;
    margin-left: 7px;
}
.arrow_down {
    float: right;
    font-family: TextProLight;
    color: #333333;
    font-size: 18pt;
    margin-top: 0;
    line-height: 0.8;
    margin-right: 7px;
}
.option_mark{
    position: absolute;
    width: 100%;
    top: 26px;
    left: 0;
    background-color: rgba($color: white, $alpha: 0.9);
    border-radius: 5px;
    height: auto;
    max-height: 85px;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: left;
}
.option_mark p:hover {
    background-color: rgba($color: #cccccc, $alpha: 0.9);
}
.option_mark p{
    width: calc(100% - 7px);
    font-family: TextProLight;
    color: black;
    float: left;
    font-size: 11pt;
    padding-top: 5px;
    padding-bottom: 3px;
    padding-left: 7px;
    margin: auto;
}
</style>