<template>
  <div id="wrap">
    <div class="navigate_row">
      <div class="navigate_col">
        <div class="navigate_line_wrap">
          <div class="navigate_arrow navigate_arrow_up">
            <i class="arrow up"></i>
          </div>
          <div class="naviate_point" @click="ref(1)"></div>
          <div class="navigate_line navigate_line_top"></div>
          <div class="naviate_point">
            <a href="#page1"></a>
          </div>
          <div class="navigate_line navigate_line_mid"></div>
          <div class="naviate_point" @click="moveTo(3)"></div>
          <div class="navigate_line navigate_line_bot"></div>
          <div class="naviate_point" @click="ref(4)"></div>
          <div class="navigate_arrow navigate_arrow_down">
            <i class="arrow down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="left_back back"></div>
    <div class="right_back back">
      <img src="../assets/img/bg_main.jpg"/>
    </div>
    <full-page :options="options" id="fullpage">
      <div class="section first_section" id="first" data-anchor="page1">
        <div class="wrap_section">
          <div class="left_part_section part_section">
            <table>
              <tr>
                <td>
                  <div class="content_section">
                    <p class="title">МОБИЛЬНОЕ<br/>ПРИЛОЖЕНИЕ</p>
                    <p class="descript">
                      С видеорегистратора <span class="plain_span">LTG-CAM</span> вам больше не нужно<br/>
                      разглядывать меню на маленьком мониторе - в нашем<br/>
                      видеорегистраторе установлен WI-FI.
                    </p>
                    <p class="header_text">Специальное приложение LTG-CAM позволит вам:</p>
                    <div class="text_block">
                      <div class="first_col text_col">
                        <div class="icon_ok">
                          <img src="../assets/img/check.svg"/>
                        </div>
                        <div class="text_col_content_wrap">
                          <p class="text_col_content">
                            <span class="plain_span">Управлять всеми<br/>
                            настройками</span> через<br/>
                            ваш смартфон или<br/>
                            планшет
                          </p>
                        </div>
                      </div>
                      <div class="second_col text_col">
                        <div class="icon_ok">
                          <img src="../assets/img/check.svg"/>
                        </div>
                        <div class="text_col_content_wrap">
                          <p class="text_col_content">
                            <span class="plain_span">Скачивать</span> видео<br/>
                            и фото
                          </p>
                        </div>
                      </div>
                      <div class="third_col text_col">
                        <div class="icon_ok">
                          <img src="../assets/img/check.svg"/>
                        </div>
                        <div class="text_col_content_wrap">
                          <p class="text_col_content">
                          <span class="plain_span">Просматривать все<br/>
                          файлы</span> на вашем<br/>
                          устройстве
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="button_download">
                      <button>СКАЧАТЬ ПРИЛОЖЕНИЕ</button>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="right_part_section part_section">
            <table>
              <tr>
                <td>
                  <img src="../assets/img/ph.png"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="section second_section" id="second">
        <div class="wrap_section">
          <div class="left_part_section part_section">
            <table>
              <tr>
                <td>
                  <div class="content_section">
                    <p class="title">СДЕЛАЙ ЗАКАЗ СЕЙЧАС</p>
                    <p class="descript">
                      Выберите подходящий видеорегистратор, мы перезвоним Вам<br/>
                      и доставим его по адресу
                    </p>
                    <div class="text_block_col text_block_col_left">
                      <div class="first_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/money.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                              Оплата при<br/>
                              получении
                          </p>
                        </div>
                      </div>
                      <div class="first_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/shield.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                              2 года<br/>
                              гарантии
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="text_block_col text_block_col_right">
                      <div class="second_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/shipped.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                            Доставка по<br/>
                            всей России
                          </p>
                        </div>
                      </div>
                      <div class="second_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/starphone.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                              Официальное<br/>
                              мобильное приложение
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="button_download">
                      <button>СДЕЛАТЬ ЗАКАЗ</button>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="right_part_section part_section">
            <table>
              <tr>
                <td>
                  <img src="../assets/img/box.png"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="section third">
        <div class="wrap_section">
          <div class="left_part_section part_section">
            <table>
              <tr>
                <td>
                  <div class="content_section">
                    <p class="title">
                      ВИДЕОРЕГИСТРАТОР<br/>
                      LTG-CAM
                    </p>
                    <p class="descript">
                      Сконструирован специально для вашего автомобиля
                    </p>
                    <div class="text_block_col text_block_col_left">
                      <div class="first_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/1080p.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                              Full HD<br/>
                              съёмка
                          </p>
                        </div>
                      </div>
                      <div class="first_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/wave.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                              Не создает помех<br/>
                              в работе других<br/>
                              систем
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="text_block_col text_block_col_right">
                      <div class="second_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/view.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                            Не мешает<br/>
                            обзору
                          </p>
                        </div>
                      </div>
                      <div class="second_col text_col">
                        <div class="icon_large">
                          <img src="../assets/img/search.svg"/>
                        </div>
                        <div class="text_col_content_wrap text_col_content_wrap_row">
                          <p class="text_col_content">
                            Не привлекает<br/>
                            внимание
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="button_download">
                      <button>ВЫБРАТЬ КАМЕРУ</button>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="right_part_section part_section">
            <table>
              <tr>
                <td>
                  <img src="../assets/img/cam.png"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="section forth_section">
        <div class="wrap_section forth_section">
          <table>
            <tr>
              <td>
                <p class="title">ВИДЕОЗАПИСИ</p>
                <s>Обзор видеорегистратора</s>
                <a>Примерм видео</a>
              </td>
            </tr>
          </table>
          <img class="notebook" src="../assets/img/lap.png"/>
          <div class="video_wrap">
            <iframe src="https://www.youtube.com/embed/M_y3UU7rQmo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>

import FullPage from 'vue-fullpage.js';
// import fullPageMixin from 'vue-fullpage.js/src/fullPageMixin.js';
// import $ from 'jquery';

export default {
  name: 'Main',
  // mixins: [FullPage.mixins,],
  components: {
      FullPage
    },

  data () {
    return {
      msg: 'menushka',
      options: {
            paddingTop: '0',
            navigation: false,
            anchors: ['page1', 'page2', 'page3', 'page4']
          }
    }
  },

  methods: {
    ref: function (page_id) {
      $.fn.fullpage.moveSectionDown();
    },
    moveTo: function(page_id) {
      $.fn.fullpage.moveTo(2, 2);
    }
  },

  destroyed: function() {
    $.fn.fullpage.destroy('all');
  }

}
</script>

<style lang="scss" scope>
.section{
  width: 100vw;
  height: 100vh;
  background-color: transparent;
}
.navigate_row{
  height: 250px;
  position: fixed;
  width: 100%;
  top:50%;
  margin-top: -140px;
  z-index: 9;
}
.navigate_col{
  width: 74%;
  height: 100%;
  min-width: 1000px;
  margin: auto;
}
.navigate_line_wrap{
  width: 1px;
  height: 100%;
  float: right;
}
.navigate_line{
  width: 1px;
  background-color: white;
  height:60px;
  float: left;
}
.naviate_point{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  float: left;
  margin-left: -4px;
  cursor: pointer;
}
.navigate_arrow{
  height: 10px;
  width: 18px;
  float: left;
  margin-left: -9px;
  cursor: pointer;
}
.navigate_arrow i{
  width: 5px;
  height: 5px;
  border: 1px solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.navigate_arrow .arrow.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.navigate_arrow .arrow.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.navigate_arrow_up{
  margin-bottom: 30px;
}
.navigate_arrow_down{
  margin-top: 20px;
}
#fp-nav{
  z-index: 99;
}
// #fp-nav ul{
//   width: 74%;
//   height: 100%;
//   min-width: 1000px;
//   margin: auto;
// }
// #fp-nav li{
//   width: 100% !important;
//   margin-left: 0 !important;
//   margin-top: 0 !important;
//   margin-bottom: 57px !important
// }
// #fp-nav li a{
//   float: right !important;
//   width: 10px !important;
//   height: 10px !important;
// } 
// #fp-nav li a.active span{
//   width: 8px !important;
//   height: 8px !important;
//   margin: 0 !important;
//   margin-left: 4px !important;
//   top:0 !important;
//   left:0 !important;
//   background-color: white !important;
// }
// #fp-nav li a span{
//   width: 8px !important;
//   height: 8px !important;
//   margin: 0 !important;
//   margin-left: 4px !important;
//   top:0 !important;
//   left:0 !important;
//   background-color: transparent !important;
//   border: 1px solid white !important;
// }
.left_back{
  position: absolute;
  width: 50%;
  height: 100%;
  float: left;
  background-color: rgba($color: #070506, $alpha: 0.9);
  z-index: -1;
}
.right_back{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2
}
.back img{
  width: 100%;
  height: 100%;
}
.wrap_section{
  width: 74%;
  min-width: 1000px;
  height: 100%;
  margin: auto;
}
.part_section{
  width: 50%;
  height: 100%;
  float: left;
}
.part_section table{
  width: 100%;
  height: 100%;
}
.content_section{
  vertical-align: middle;
}
.left_part_section .content_section{
  width: 100%;
  height: auto;
  text-align: left;
}
.text_block_col {
  float: left;
  margin-top:15px;
}
.text_block_col_left{
  width: 35%;
}
.text_block_col_right{
  width: 50%;
}
.text_block_col .text_col{
  width:100%;
  float: left;
  margin-bottom: 20px;
}
.text_col{
  float: left;
  margin-right: 15px;
}
.button_download{
  width: 100%;
  float: left;
  margin-top: 30px;
}
.button_download button{
  background-color: #ce4c4c;
  font-size: 0.8em;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 10px 23px;
  padding-top: 12px;
}

.left_part_section .title{
  font-weight: 700;
  font-size: 1.5em;
}
.title{
  margin-bottom: 18px;
}
.descript, .header_text, .text_col_content{
  font-size: 0.8em;
}
.plain_span{
  font-weight: 700;
  font-size: 1em;
}
.text_col_content_wrap{
  float: left;
  margin-left: 7px;
}
.text_col_content_wrap_row{
  margin-left: 13px;
}
.text_col_content{
  margin: 0;
}
.icon_ok{
  width: 15px;
  height: 15px;
  float: left;
}
.icon_ok img{
  width: 100%;
  height: auto;
}
.icon_large{
  width: 30px;
  height: 30px;
  float:left
}
.icon_large img{
  width: 100%;
  height: auto;
}
.right_part_section img{
  width: 80%;
  height: auto;
  vertical-align: middle;
  margin-top: 15%;
}
.second_section .right_part_section img{
  width: 67%;
  height: auto;
  vertical-align: middle;
  margin-top: 15%;
}
.next{
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 9;
  top: 200px;
  left: 400px;
}

.notebook{
  position: absolute;
  width: 54%;
  min-width: 600px;
  height:auto;
  top: 23%;
  left: 50%;
  margin-left: -27%;
  z-index: 998;
}
.video_wrap{
  position: absolute;
  width: 54%;
  min-width: 600px;
  height:50%;
  top: 23%;
  left: 50%;
  margin-left: -27%;
  z-index: 999;
}
.video_wrap iframe{
  width: 65%;
  height: 88%;
  margin: auto;
  margin-top:3%;
  object-fit: cover;
}
.forth_section table{
  width: 40%;
  height: 80%;
  float: left;
  text-align: left;
}
.forth_section .title{
  font-weight: 700;
  font-size: 1.5em;
}
.forth_section s {
  width: 100%;
  float: left;
  color: white;
  margin-top:20px;
  vertical-align: middle;
}
.forth_section a {
  width: 100%;
  float: left;
  color: #cba35d;
  vertical-align: middle;
  margin-top:20px;
  text-decoration: underline;
}
</style>