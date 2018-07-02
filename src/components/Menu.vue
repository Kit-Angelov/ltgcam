<template>
  <div id="wrap_menu">
    <div class="menu_content">
      <div class="left_part">
        <router-link to="/">
        <div class="logo_wrap">
          <img class="logo" src="../assets/img/ltg_logo.svg">
        </div>
        </router-link>
        <div class="basket_wrap">
          <router-link to="/basket">
            <img class="basket_img" src="../assets/img/shopping.svg">
            <div class="basket_point" v-if="basketState"></div>
          </router-link>
        </div>
      </div>
      <div class="middle_part">
        <div class="menu_elem menu_elem_first">
          <router-link to="/">
              ГЛАВНАЯ
          </router-link>
          </div>
        <div class="menu_elem menu_elem_second" @mouseover="catalog_over(true)" @mouseout="catalog_over(false)">
          <router-link :to="{path: '/catalog/' + category[0].name}">
            РЕГИСТРАТОРЫ
          </router-link>
          <transition name="fade">
            <div class="drop_down_wrap">
            <div class="drop_down_menu drop_down_catalog" v-if="drop_catalog" @mouseover="catalog_over(true)">
              <router-link :to="{path: '/catalog/' + mark.name}" v-for="mark in category" :key="mark.id">
                {{mark.name.toUpperCase()}}
              </router-link>
            </div>
            </div>
          </transition>
        </div>
        <div class="menu_elem menu_elem_third">
          <router-link to="/instruction">
            УСТАНОВКА
          </router-link>
        </div>
        <div class="menu_elem menu_elem_forth">
          <router-link to="/delivery">
            ДОСТАВКА
          </router-link>
          </div>
        <div class="menu_elem menu_elem_five" @mouseover="contacts_over(true)" @mouseout="contacts_over(false)">
          <router-link to="/contacts/map">
            КОНТАКТЫ
          </router-link>
          <transition name="fade">
          <div class="drop_down_wrap">
          <div class="drop_down_menu drop_down_contacts" v-if="drop_contacts" @mouseover="contacts_over(true)">
            <router-link to="/contacts/about">
              О НАС
            </router-link>
            <router-link to="/contacts/partners">
              ПАРТНЁРАМ
            </router-link>
          </div>
          </div>
          </transition>
        </div>
      </div>
      <div class="right_part">
        <table>
          <tr>
            <td>
              <div class="phone info">
                <img src="../assets/img/phonecall.svg"/>
                <p>+7 920 222 66 44</p>
              </div>
            </td>
            <td>
              <div class="worktime info">
                <img src="../assets/img/clock.svg"/>
                <p>10.00-20.00</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import host from './host.js';
export default {
  name: 'Menu',

  data () {
    return {
      drop_contacts: false,
      drop_catalog: false,
      category: null,
    }
  },
  mounted () {
    this.$store.dispatch('checkBasket')
    this.$http.get(host + 'marks/').then(function(response) {
          this.category = response.data;
          console.log(response)
      }, function(error) {
          console.log(error)
      });
  },
  computed: {
    basketState(){
      return this.$store.state.basketState
    }
  },
  methods: {
    contacts_over(value) {
      this.drop_contacts = value
    },
    catalog_over(value) {
      this.drop_catalog = value
    },
  },
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.menu_elem{
  float: left;
  padding-top: 16px;
  position: relative;
}
.menu_elem:nth-child(1){
  width: 17%;
}
.menu_elem:nth-child(1n+2){
  width: 19%;
}
.menu_elem:nth-child(2){
  width: 25%;
}
.menu_elem a{
  font-family: TextProMedium;
  font-size: 10pt;
}
.menu_elem::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #ce4c4c;
  margin:auto;
  // border-bottom: 3px solid#ce4c4c;
  transition: width .3s;
}
.menu_elem_first:hover::after{
  width: 60px;
  
}
.menu_elem_second:hover::after{
  width: 98px;
  
}
.menu_elem_third:hover::after{
  width: 75px;
  
}
.menu_elem_forth:hover::after{
  width: 68px;
  
}
.menu_elem_five:hover::after{
  width: 68px;
}

#wrap_menu {
    height: 5vh;
    min-height: 50px;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
    z-index: 9999;
}

.menu_content {
  height: 100%;
  width: 74vw;
  min-width: 1000px;
  margin: auto;
}

.left_part{
  float: left;
  height: 100%;
  width: 26%;
  min-width: 100px;
}
.right_part{
  float: left;
  height: 100%;
  width: 27%;
  min-width: 100px;
}
.middle_part{
  float: left;
  height: 100%;
  width: 47%;
  min-width: 200px;
}
.logo_wrap{
  float: left;
  width: 36%;
  min-width: 141px;
  height: 100%;
  cursor: pointer;
}
.logo {
  width: 100%;
  height: 100%;
}
.basket_wrap{
  float: left;
  width: 5%;
  min-width: 16px;
  height: 100%;
  margin-left: 12.5%;
  position: relative;
}
.basket_point{
  width: 8px;
  height: 8px;
  position: absolute;
  background-color: #ce4c4c;
  border-radius: 50%;
  top:13px;
  right: 3px;
}
.basket_img{
  width: 100%;
  height: auto;
  padding-top: 15px;
}
.menu_elem p{

}
.right_part table{
  float: right;
}
.info{
  float: right;
}
.info img {
  float: left;
  height: 12px;
  width: auto;
  padding-top: 15px;
  padding-right: 6px;
  vertical-align: middle;
}
.info p{
  float: left;
  margin-top:12px;
}
.worktime p{
  color: #cba35d;
  font-family: TextProBold;
  font-size: 12pt;
  margin-top: 12px;
}
.phone{
  margin-right: 15px;
}
.phone p{
  font-family: TextProLight;
  font-size: 12pt;
}
.drop_down_wrap{
  position: absolute;
  width: 100%;
  height: auto;
  text-align: left;
  top: 35px;
  left: 0;
  padding-top: 5px;
}
.drop_down_wrap a{
  width: 100%;
  float: left;
  margin-left: 12px;
  margin-right: 12px;
  font-family: TextProMedium;
  font-size: 10pt;

}
.drop_down_wrap a:hover{
  color: #cccccc;
}
.drop_down_menu{
  background-color: rgba($color: #000000, $alpha: .3);
  border-radius: 2px;
  position: absolute;
  height: auto;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 5px;
}
.drop_down_catalog{
  width: 250%;
  left: -75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
}
</style>
