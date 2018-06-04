<template>
  <div id="wrap_catalog">
      <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="top_pane">
            <div class="wrap_top_pane">
                <div class="navigate_text">
                    <p class="title_text" @click="toCatalog()">Видеорегистраторы</p>
                    <p class="selectet_text" @click="toCatalog()">&rarr; BMW</p>
                    <p class="detail_name" v-if="detail">&rarr; Series 3</p>
                </div>
                <div class="navigate_select" v-if="!detail">
                    <select>
                        <option>BMW</option>
                        <option>VOLVO</option>
                    </select>
                    <p class="navigate_select_title">Марка автомобиля:</p>
                </div>
            </div>
        </div>
        <app-detail v-if="detail" v-on:popup="buyOneClick()"></app-detail>
        <div class="main_wrap_content" v-else>
            <div class="wrap_content">
                <div class="content">
                <div class="content_item" v-for="item in content" :key="item.name">
                    <div class="content_item_wrap">
                        <div class="non-hover-item" @click="detailview()">
                            <table>
                                <tr>
                                    <td>
                                        <p>{{item.model | capitalize}}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <img src="../assets/img/camera.jpg" @click="detailview()"/>
                        <div class="text" @click="detailview()">
                            <p class="name">{{ item.name }} {{item.model}}</p>
                            <p class="cat-descript">{{ item.descrip }}</p>
                            <p class="price">{{ item.price }}</p>
                        </div>
                        <div class="basket_but_wrap">
                            <div class="basket_but" @click="addToBasket()">
                                <img class="basket_but_img" src="../assets/img/add.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="over" v-if="popup" @click="closePopup()"></div>
        <app-order v-if="popup"></app-order>
        <app-soc-cop></app-soc-cop>
  </div>
</template>

<script>
import Detail from './Detail.vue';
import Order from './Order.vue';
import SocialCopir from './SocialCopir.vue';
import vSelect from 'vue-select'
export default {
  name: 'Catalog',
  components: {
      'AppDetail': Detail,
      'AppOrder': Order,
      'AppSocCop': SocialCopir,
      'vselect': vSelect,
  },
  data () {
    return {
        detail: false,
        popup: false,
        content: [
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW",
            "model": "Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            }
        ]
    }
  },
  methods: {
        buyOneClick() {
            this.popup = true;
        },
        closePopup() {
            this.popup = false;
        },
        detailview(){
            this.detail = true;
        },
        toCatalog() {
            this.detail = false;
        },
        addToBasket(){
            localStorage.setItem('basket', {'first': 123, 'second': 43});
            this.$store.dispatch('fillBasket');
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
    overflow-y: scroll;
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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
.name{
    font-family: TextProMedium;
    font-size: 12pt;
}
.cat-descript{
    font-family: TextProLight;
    font-size: 11pt;
}
.price{
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
.over{
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
</style>