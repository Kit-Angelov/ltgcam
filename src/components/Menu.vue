<template>
  <div id="wrap_menu">
    <div class="menu_content">
      <div class="left_part">
        <div class="logo_wrap">
          <img class="logo" src="../assets/img/ltg_logo.svg">
        </div>
        <div class="basket_wrap">
          <router-link to="/basket">
            <img class="basket_img" src="../assets/img/shopping.svg">
          </router-link>
        </div>
      </div>
      <div class="middle_part">
        <div class="menu_elem">
          <router-link to="/">
            ГЛАВНАЯ
          </router-link>
          </div>
        <div class="menu_elem">
          <router-link to="/catalog">
            РЕГИСТРАТОРЫ
          </router-link>
          </div>
        <div class="menu_elem">
          <router-link to="/instruction">
            УСТАНОВКА
          </router-link>
        </div>
        <div class="menu_elem">
          <router-link to="/delivery">
            ДОСТАВКА
          </router-link>
          </div>
        <div class="menu_elem">
          <router-link to="/contacts">
            КОНТАКТЫ
          </router-link>
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

export default {
  name: 'Menu',

  data () {
    return {
      msg: 'menushka',
    }
  },
}
</script>

<style lang="scss" scope>
a {
  text-decoration: none;
}
.menu_elem{
  float: left;
  padding-top: 16px;
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
  font-size: 0.7em;
  font-weight: bold;
}
.menu_elem a:hover{
  border-bottom: 2px solid red;
}


#wrap_menu {
    height: 5vh;
    min-height: 50px;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
    z-index: 9;
}

.menu_content {
  height: 100%;
  width: 74vw;
  min-width: 1000px;
  margin: auto;
}

.left_part, .right_part{
  float: left;
  height: 100%;
  width: 27%;
  min-width: 100px;
}
.middle_part{
  float: left;
  height: 100%;
  width: 46%;
  min-width: 200px;
}
.logo_wrap{
  float: left;
  width: 36%;
  min-width: 141px;
  height: 100%;
}
.logo {
  width: 100%;
  height: 100%;
}
.basket_wrap{
  float: left;
  width: 5%;
  min-width: 20px;
  height: 100%;
  margin-left: 12.5%;
}
.basket_img{
  width: 100%;
  height: auto;
  padding-top: 15px;
}
.menu_elem p{
  font-size: 0.7em;
  font-weight: bold;
  line-height: 50px;
  margin: 0;
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
  font-size: 0.9em;
}
.worktime p{
  color: #cba35d;
  font-weight: bold;
}
.phone{
  margin-right: 15px;
}
</style>
