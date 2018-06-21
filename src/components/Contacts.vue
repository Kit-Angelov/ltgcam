<template>
    <div id="contacts">
        <div class="con_navigate_row">
            <div class="con_navigate_col">
                <div class="con_navigate_line_wrap">
                <div class="con_navigate_arrow con_navigate_arrow_up" @click="prev()">
                    <img class="con_arrow con_up" src="../assets/img/down-arrow.svg">
                </div>
                <div class="con_navigate_line con_navigate_line_top"></div>
                <div class="con_navigate_line con_navigate_line_mid"></div>
                <div class="con_navigate_arrow con_navigate_arrow_down" @click="next()">
                    <img class="con_arrow con_down" src="../assets/img/down-arrow.svg">
                </div>
                </div>
            </div>
        </div>
        <div class="left_back back"></div>
        <div class="right_back back">
            <img src="../assets/img/bg_main.jpg"/>
        </div>
        <full-page :options="options" id="fullpage">
            <div class="section con-first_section" id="first">
                <div class="con-wrap_section">
                    <div class="con-left_part con-part">
                        <div class="con-first_left_content_wrap">
                            <table>
                                <tr>
                                    <td>
                                        <p class="first_left_title">СВЯЖИТЕСЬ С НАМИ,</p>
                                        <p class="first_left_subtitle">если у вас возникли какие-либо вопросы</p>
                                        <div v-if="callback">
                                        <p class="first_left_text">Наш телефон (+ whatsapp, viber):</p>
                                        <p class="first_left_phone">+7 920 222 66 44</p>
                                        <p class="first_left_text">Наша электронная почта:</p>
                                        <p class="first_left_email" @click="openEmail()">info@ltgcam.ru</p>
                                        <p class="first_left_text">Наш адрес:</p>
                                        <p class="first_left_adres">г. Воронеж, ул. Ломоносова, дом 2б</p>
                                        <button class="order_call" @click="ordercall()">ЗАКАЗАТЬ ЗВОНОК</button>
                                        </div>
                                        <div v-else>
                                            <app-callback v-on:backTo="backTo()" v-on:orderCallSend="orderCallSend()"></app-callback>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="con-right_part con-part map_part">
                        <app-map></app-map>
                    </div>
                </div>
            </div>
            <div class="section con-second_section" id="second">
                <div class="con-wrap_section">
                    <div class="con-left_part con-part">
                        <div class="con-second_left_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <p class="third_left_title team_ltg">КОМАНДА LTG CAM</p>
                                         <p class="second_left_text team_ltg">
                                            Мы - Команда молодых и крайне амбициозных профессионалов.<br/>
                                            Ответим на любые вопросы и поможем в любой ситуации.<br/>
                                            Вашему вниманию коллектив компании LTG CAM.
                                        </p>
                                        <!-- <p class="second_left_text"></p> -->
                                    </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                    <div class="con-right_part con-part">
                        <div class="con-second_right_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <div class="persons">
                                            <div class="person">
                                                <img src="../assets/img/pidr.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/pidr.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/pidr.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/pidr.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/pidr.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section con-third_section">
                <div class="con-wrap_section">
                    <div class="con-left_part con-part">
                        <div class="con-second_left_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <p class="second_left_title">Стань нашим партнером!</p>
                                        <p class="second_left_text">
                                            С каждым днем видеорегистраторы LTG CAM завоевывают<br/>
                                            все больше и больше поклонников по всему миру.<br/>
                                            Автолюбители, для которых безопасность и уверенность<br/>
                                            на дороге не пустой звук, по праву оценят<br/>
                                            продукцию нашей компании.
                                        </p>
                                        <p class="second_left_text">
                                            Для участия в партнерской программе LTG CAM заполните<br/>
                                            форму обратной связи или свяжитесь с нами по телефону.<br/>
                                            Наш менеджер поможет вам выбрать наиболее подходящий вариант<br/>
                                            сотрудничества и оформит все необходимые документы.
                                        </p>
                                    </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                    <div class="con-right_part con-part">
                        <div class="con-second_right_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <div class="form_parnter">
                                            <form @submit="sendPartnerCall()">
                                                <input class="input_full" placeholder="ФИО*" v-model="partenrCall.fio" minlength="3" maxlength="70" required/>
                                                <input class="input_full" placeholder="Название компании" v-model="partenrCall.company" minlength="3" maxlength="70"/>
                                                <input class="input_little" type="tel" placeholder="Телефон*" v-model="partenrCall.phone" minlength="3" maxlength="20" required/>
                                                <input class="input_great" type="email" placeholder="E-mail*" v-model="partenrCall.email" minlength="3" maxlength="70" required/>
                                                <textarea placeholder="Комментарий" v-model="partenrCall.comment"></textarea>
                                                <button type="submit" class="sumbit">ОТПРАВИТЬ</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </full-page>
        <app-soc-cop></app-soc-cop>
        <div class="over-order-call-send" v-if="orderCallSendCheck" @click="closeOrderCallSend()"></div>
        <transition name="fade">
        <app-order-call-send v-if="orderCallSendCheck" v-on:closeOrderCallSend="closeOrderCallSend()"></app-order-call-send>
        </transition>
        <div class="over-order-call-send" v-if="partnerCallSendCheck" @click="closeOrderCallSend()"></div>
        <transition name="fade">
        <app-order-call-send v-if="partnerCallSendCheck" v-on:closePartnerCallSend="closePartnerCallSend()"></app-order-call-send>
        </transition>
    </div>
</template>

<script>
import FullPage from 'vue-fullpage.js';
import Map from './Map.vue';
import Callback from './Callback.vue'
import SocialCopir from './SocialCopir.vue'
import OrderCallSend from './OrderCallSend.vue'
import PartnerCallSend from './PartnerCallSend.vue'
import host from './host.js'
export default {
    name: "Contacts",
    components: {
      FullPage,
      'AppMap': Map,
      'AppCallback': Callback,
      'AppSocCop': SocialCopir,
      'AppOrderCallSend': OrderCallSend,
      'AppPartnerCallSend': PartnerCallSend,
    },
    data () {
        return {
            callback: true,
            orderCallSendCheck: false,
            partenrCall: {},
            partnerCallSendCheck: false,
            options: {
                    paddingTop: '0',
                    navigation: true,
                }
        }
    },
    mounted() {
        let rel_path = this.$route.params.part
        if (rel_path == 'about') {
            this.next()
        } else if (rel_path == 'partners') {
            this.moveTo(3)
        } else {

        }
    },
    watch: {
        '$route' (to, from) {
            let rel_path = this.$route.params.part
            if (rel_path == 'about') {
                this.moveTo(2)
            } else if (rel_path == 'partners') {
                this.moveTo(3)
            } else {
                this.moveTo(1)
            }
        }
    },
    methods: {
        ordercall () {
            this.callback = false;
        },
        backTo() {
            this.callback = true;
        },
        orderCallSend() {
            this.callback = true;
            this.orderCallSendCheck = true;
            var self = this;
            setTimeout(function(){
                self.orderCallSendCheck = false;
            }, 2000);
        },
        closeOrderCallSend() {
            this.orderCallSendCheck = false;
        },
        closePartnerCallSend() {
            this.partnerCallSendCheck = false;
        },
        next(){
            $.fn.fullpage.moveSectionDown();
        },
        prev(){
            $.fn.fullpage.moveSectionUp();
        },
        moveTo: function(page_id) {
            $.fn.fullpage.moveTo(page_id, page_id);
        },
        openEmail() {
            window.location.href = "mailto:info@ltgcam.ru?subject=&body="
        },
        sendPartnerCall() {
            var data = this.partenrCall
            this.$http.post(host + 'partners_call', data).then(function(response) {
            }, function(error) {
            }),
            this.partnerCallSendCheck = true;
            var self = this;
            setTimeout(function(){
                self.partnerCallSendCheck = false;
            }, 2000);
            this.partenrCall = {}
        },
        closeOrderCallSend() {
            this.partnerCallSendCheck = false;
        }
    },
    beforeCreate(){
        $.fn.fullpage.destroy('all');
    },
    // destroyed: function() {
    //     $.fn.fullpage.destroy('all');
    // }
}
</script>
<style lang="scss">
#contacts{
    width:100vw;
    height:100vh;
}
.left_back{
  position: absolute;
  width: 50%;
  height:100%;
  background-color: rgba($color: #070506, $alpha: 0.7);
  z-index: -1;
  overflow: hidden;
}
.right_back{
  position: absolute;
  width: 100%;
  height:100%;
  z-index: -2;
  overflow: hidden;
}
.back img{
  width: 100%;
  height: 100%;
}
.con-wrap_section{
    width:100%;
    height: 100%;
}
.con-part{
    width: 50%;
    height: 100%;
    float:left;
}
.con-first_left_content_wrap{
    width: 74%;
    min-width: 500px;
    float: right;
    height: 100%;
    text-align: left;
}
.con-first_left_content_wrap table{
    width: 100%;
    height: 100%;
}
.first_left_title{
    font-size: 26pt;
    font-family: TextProBold;
    margin-bottom: 0;
}
.first_left_subtitle{
    font-size: 12pt;
    font-family: TextProLight;
    margin-top: 3px;
    margin-bottom: 25px;
}
.first_left_text{
    font-size: 12pt;
    font-family: TextProLight;
    margin-bottom: 5px;
}
.first_left_phone{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16pt;
    font-family: TextProMedium;
    padding-left: 5px;
}
.first_left_email{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16pt;
    display: inline;
    font-family: TextProMedium;
    color: #cba35d;
    padding-left: 5px;
    text-decoration: underline;
    cursor: pointer;
}
.first_left_adres{
    margin-bottom: 10px;
    margin-top: 0;
    font-size: 16pt;
    font-family: TextProMedium;
    padding-left: 5px;
}
.order_call{
    background-color: #cf3835;
    font-size: 12pt;
    font-family: TextProMedium;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 15px;
    cursor: pointer;
}
.order_call:hover{
    background-color: #ce4c4c;
}
.order_call:active{
    background-color: #cf3835;
}
.con-second_left_content_wrap{
    width: 74%;
    min-width: 500px;
    float: right;
    height: 100%;
    text-align: left;
}
.con-second_left_content_wrap table{
    width: 100%;
    height: 100%;
}
.second_left_title{
    font-size: 26pt;
    font-family: TextProBold;
}
.second_left_text{
    font-size: 12pt;
    font-family: TextProLight;
    padding-right: 40px;
}
.con-second_right_content_wrap{
    width: 74%;
    min-width: 500px;
    float: left;
    height: 100%;
    text-align: left;
    padding-left: 50px;
}
.con-second_right_content_wrap table{
    width: 100%;
    height: 100%;
}
.form_parnter{
    width: 70%;
    height:280px;
    padding: 30px;
    background-color: rgba($color: #070506, $alpha: 0.2)
}
::-webkit-input-placeholder { 
    font-size: 12pt;
    font-family: TextProLight;
  color: white;
}
::-moz-placeholder { 
  color: white;
  font-size: 12pt;
    font-family: TextProLight;
}
:-ms-input-placeholder {
  color: white;
  font-size: 12pt;
    font-family: TextProLight;
}
:-moz-placeholder { 
  color: white;
  font-size: 12pt;
    font-family: TextProLight;
}
.input_full{
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    line-height: 0.4;
    color: white;
    outline: none;
    font-size: 12pt;
    font-family: TextProLight;
}
.form_parnter textarea{
    height: 70px;
    border: 1px solid white;
    color: white;
    outline: none;
    background-color: transparent;
    width: 98%;
    padding: 5px;
    font-size: 12pt;
    font-family: TextProLight;
    margin-top: 20px;
    resize: none;
}
.input_little{
    width: 45%;
    float: left;
    height: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    line-height: 0.4;
    color: white;
    outline: none;
    font-size: 14pt;
    font-family: TextProLight;
}
.input_great{
    width: 48.8%;
    float: left;
    height: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    line-height: 0.4;
    color: white;
    outline: none;
    font-size: 12pt;
    font-family: TextProLight;
    margin-left: 5%;
}
.sumbit{
    background-color: #cf3835;
    font-size: 12pt;
    font-family: TextProMedium;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 15px;
    cursor: pointer;
}
.sumbit:hover{
    background-color: #ce4c4c;
}
.sumbit:active{
    background-color: #cf3835;
}
.third_left_title{
    font-size: 26pt;
    font-family: TextProBold;
}
.persons{
    width: 80%;
    height: 50%;
    display: grid;
    grid-gap: 5%;
    grid-template-columns: repeat(auto-fit, 28%);
    grid-template-rows: repeat(auto-fit);
}
.person{
    width: 100%;
    height: 100%;
    text-align: center;
}
.person img{
    width: 100%;
    height: auto;
    object-fit: cover;
    float: left;
}
.first_name{
    font-size: 14pt;
    font-family: TextProMedium;
    margin-bottom: 0;
}
.second_name{
    margin-top: 0;
    font-size: 11pt;
    font-family: TextProLight;
}
@media all and (max-width: 1251px) {
    .con_navigate_row{
        left:95% !important;
    }
    #fp-nav{
      left:95% !important;
    }
}
.con_navigate_row{
  height: 180px;
  position: fixed;
  width: 20px;
  top:50%;
  left: 87%;
  margin-top: -125px;
  margin-left: -20px;
  z-index: 9;
}
.con_navigate_col{
  width: 100%;
  height: 100%;
  margin: auto;
}
.con_navigate_line_wrap{
  width: 1px;
  height: 100%;
  float: right;
}
.con_navigate_line{
  width: 1px;
  background-color: white;
  height:60px;
  margin-bottom:5px;
  margin-top:5px;
  float: left;
}
.con_navigate_arrow{
  height: 10px;
  width: 18px;
  float: left;
  margin-left: -9px;
  cursor: pointer;
}
.con_navigate_arrow_up{
  margin-bottom: 30px;
}
.con_navigate_arrow_down{
  margin-top: 20px;
}
.con_arrow{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.con_up{
  transform: rotate(180deg);
}
#fp-nav{
  position: fixed;
  width: 20px;
  top:50%;
  left: 87%;
  height: 160px;
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
.over-order-call-send{
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    z-index: 998;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.team_ltg{
    margin-top: -20px;
}
</style>

