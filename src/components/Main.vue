<template>
  <div id="wrap">
    <div class="navigate_row">
      <div class="navigate_col">
        <div class="navigate_line_wrap">
          <div class="navigate_arrow navigate_arrow_up" @click="prev()">
            <img class="arrow up" src="../assets/img/down-arrow.svg">
          </div>
          <div class="navigate_line navigate_line_top"></div>
          <div class="navigate_line navigate_line_mid"></div>
          <div class="navigate_line navigate_line_bot"></div>
          <div class="navigate_arrow navigate_arrow_down" @click="next()">
            <img class="arrow down" src="../assets/img/down-arrow.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="left_back back"></div>
    <div class="right_back back">
      <img src="../assets/img/bg_main.jpg"/>
    </div>
    <full-page :options="options" id="fullpage">
      <div class="section first_section" id="first">
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
                    <div class="text_block_col text_block_col_left text_block_col_left_first">
                      <div class="first_col text_col">
                        <div class="icon_large first_icon_large">
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
                        <div class="icon_large second_icon_large">
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
                        <div class="icon_large third_icon_large">
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
                        <div class="icon_large forth_icon_large">
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
                      <router-link to="/catalog">
                      <button>ВЫБРАТЬ КАМЕРУ</button>
                      </router-link>
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
      <div class="section second_section" id="second">
        <div class="wrap_section">
          <div class="left_part_section part_section">
            <table>
              <tr>
                <td>
                  <div class="content_section">
                    <p class="title">СДЕЛАЙ ЗАКАЗ СЕЙЧАС</p>
                    <p class="descript">
                      Выберите подходящий видеорегистратор, мы перезвоним вам
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
                      <router-link to="/catalog">
                      <button>СДЕЛАТЬ ЗАКАЗ</button>
                      </router-link>
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
                    <p class="title">МОБИЛЬНОЕ<br/>ПРИЛОЖЕНИЕ</p>
                    <p class="descript">
                      С видеорегистратором <span class="plain_span">LTG-CAM</span> вам больше не нужно
                      разглядывать меню на маленьком мониторе - в нашем
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
                      <a href="#">
                      <button>СКАЧАТЬ ПРИЛОЖЕНИЕ</button>
                      </a>
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
      <div class="section forth_section">
        <div class="wrap_section forth_section">
          <table>
            <tr>
              <td>
                <p class="title">ВИДЕОЗАПИСИ</p>
                <p v-if="video_state" class="strike">Обзор видеорегистратора</p>
                <p v-if="video_state" class="non-strike" @click="changeVideo(2)">Пример видео</p>
                <p v-if="!video_state" class="non-strike" @click="changeVideo(1)">Обзор видеорегистратора</p>
                <p v-if="!video_state" class="strike">Пример видео</p>
              </td>
            </tr>
          </table>
          <img class="notebook" src="../assets/img/lap.png"/>
          <div class="video_wrap">
            <iframe :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </full-page>
    <app-soc-cop></app-soc-cop>
  </div>
</template>

<script>

import FullPage from 'vue-fullpage.js';
import SocialCopir from './SocialCopir.vue'

export default {
  name: 'Main',

  components: {
      FullPage,
      'AppSocCop': SocialCopir,
    },

  data () {
    return {
      video1: "https://www.youtube.com/embed/M_y3UU7rQmo",
      video2: "https://www.youtube.com/embed/T7GDYujgluI",
      video: "",
      video_state: true,
      cur_page: 1,
      options: {
            paddingTop: '0',
            navigation: true,
          }
    }
  },
  created() {
    this.video = this.video1
  },
  methods: {
    next(){
      $.fn.fullpage.moveSectionDown();
    },
    prev(){
      $.fn.fullpage.moveSectionUp();
    },
    moveTo: function(page_id) {
      $.fn.fullpage.moveTo(page_id, page_id);
    },
    changeVideo(arg){
      if(arg == 1){
        this.video_state = true;
        this.video = this.video1;
      } else {
        this.video_state = false;
        this.video = this.video2
      }
    }
  },
  beforeCreate(){
        $.fn.fullpage.destroy('all');
    },
  // destroyed: function() {
  //   $.fn.fullpage.destroy('all');
  // }

}
</script>
<style lang="scss">
.section{
  width: 100vw;
  height: 100vh;
  background-color: transparent;
}
@media all and (max-width: 1251px) {
    .navigate_row{
        left:95% !important;
    }
    #fp-nav{
      left:95% !important;
    }
}
.navigate_row{
  height: 250px;
  position: fixed;
  width: 20px;
  top:50%;
  left: 87%;
  margin-top: -125px;
  margin-left: -20px;
  z-index: 9;
}
.navigate_col{
  width: 100%;
  height: 100%;
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
  margin-bottom:5px;
  margin-top:5px;
  float: left;
}

.navigate_arrow{
  height: 10px;
  width: 18px;
  float: left;
  margin-left: -9px;
  cursor: pointer;
}
.navigate_arrow_up{
  margin-bottom: 30px;
}
.navigate_arrow_down{
  margin-top: 20px;
}
.arrow{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.up{
  transform: rotate(180deg);
}
.left_back{
  position: absolute;
  width: 50%;
  height: 100%;
  float: left;
  background-color: rgba($color: #070506, $alpha: 0.7);
  z-index: -1;
}
.right_back{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
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
  font-family: TextProMedium;
  background-color: #cf3835;
  font-size: 12pt;
  outline: none;
  border: none;
  padding: 10px 23px;
  padding-top: 12px;
  cursor: pointer;
}
.button_download button:hover{
    background-color: #ce4c4c;
}
.button_download button:active{
    background-color: #cf3835;
}
.left_part_section .title{
  font-size: 26pt;
  font-family: TextProBold;
}
.title{
  margin-bottom: 18px;
}
.descript{
  font-family: TextProLight;
  font-size: 14pt;
  padding-right: 40px;
}
.header_text{
  font-family: TextProLight;
  font-size: 12pt;
}
.text_col_content{
  font-family: TextProLight;
  font-size: 12pt;
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
  width: 50%;
  height:auto;
  top: 25%;
  left: 50%;
  margin-left: -25%;
  z-index: 998;
}
.video_wrap{
  position: absolute;
  width: 50%;
  height:50%;
  top: 25%;
  left: 50%;
  margin-left: -25%;
  z-index: 999;
}
.video_wrap iframe{
  width: 65.3%;
  height: 20.5vw;
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
  font-size: 24pt;
  font-family: TextProBold;
}
.forth_section .strike {
  width: 100%;
  float: left;
  color: #cccccc;
  margin-top:0px;
  vertical-align: middle;
}
.forth_section .non-strike {
  width: 100%;
  float: left;
  color: #cba35d;
  vertical-align: middle;
  margin-top:0px;
  text-decoration: underline;
  cursor: pointer;
}
#fp-nav{
  position: fixed;
  width: 20px;
  top:50%;
  left: 87%;
  height: 180px;
  margin-left: -15px;
  margin-top: -90px !important;
  z-index: 9;
}
#fp-nav ul{
  width: 10px;
  height: 100%;
  margin: auto;
}
#fp-nav li{
  width: 100% !important;
  margin-left: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 57px !important
}
#fp-nav li a{
  float: right !important;
  width: 10px !important;
  height: 10px !important;
} 
#fp-nav li a.active span{
  width: 8px !important;
  height: 8px !important;
  margin: 0 !important;
  margin-left: 4px !important;
  top:0 !important;
  left:0 !important;
  background-color: white !important;
}
#fp-nav li a span{
  width: 8px !important;
  height: 8px !important;
  margin: 0 !important;
  margin-left: 4px !important;
  top:0 !important;
  left:0 !important;
  background-color: transparent !important;
  border: 1px solid white !important;
}
.first_icon_large{
  margin-top: 10px;
}
.second_icon_large{
  margin-top: 10px;
}
.third_icon_large{
  margin-top: 3px;
}
.forth_icon_large img{
  width: 70%;
  margin-left: 6px;
  margin-top: 7px;
}
.text_block_col_left_first{
  width: 37%;
}
</style>