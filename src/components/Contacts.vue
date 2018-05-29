<template>
    <div id="contacts">
        <div class="left_back back"></div>
        <div class="right_back back">
            <img src="../assets/img/bg_main.jpg"/>
        </div>
        <full-page :options="options" id="fullpage">
            <div class="section first_section" id="first">
                <div class="wrap_section">
                    <div class="left_part part">
                        <div class="first_left_content_wrap">
                            <table>
                                <tr>
                                    <td>
                                        <p class="first_left_title">СВЯЖИТЕСЬ С НАМИ,</p>
                                        <p class="first_left_subtitle">если у вас возникли какие-либо вопросы</p>
                                        <div v-if="callback">
                                        <p class="first_left_text">Наш телефон(+ whatsapp, viber):</p>
                                        <p class="first_left_phone">+7 920 222 66 44</p>
                                        <p class="first_left_text">Наша электронная почта:</p>
                                        <p class="first_left_email">info@ltgcam.ru</p>
                                        <p class="first_left_text">Наш адрес:</p>
                                        <p class="first_left_adres">г. Воронеж, ул. Ломоносова, дом 115, офис 16</p>
                                        <button class="order_call" @click="ordercall()">ЗАКАЗАТЬ ЗВОНОК</button>
                                        </div>
                                        <div v-else>
                                            <app-callback v-on:backTo="backTo()"></app-callback>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="right_part part">
                        <app-map></app-map>
                    </div>
                </div>
            </div>
            <div class="section second_section">
                <div class="wrap_section">
                    <div class="left_part part">
                        <div class="second_left_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <p class="third_left_title">КОМАНДА LTG CAM</p>
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
                    <div class="right_part part">
                        <div class="second_right_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <div class="persons">
                                            <div class="person">
                                                <img src="../assets/img/box.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/box.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/box.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/box.png">
                                                <p class="first_name">Лорем Инпус</p>
                                                <p class="second_name">Долор Сит Амет</p>
                                            </div>
                                            <div class="person">
                                                <img src="../assets/img/box.png">
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
            <div class="section third_section">
                <div class="wrap_section">
                    <div class="left_part part">
                        <div class="second_left_content_wrap">
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
                    <div class="right_part part">
                        <div class="second_right_content_wrap">
                        <table>
                                <tr>
                                    <td>
                                        <div class="form_parnter">
                                            <form>
                                                <input class="input_full" placeholder="ФИО*" required/>
                                                <input class="input_full" placeholder="Название компании"/>
                                                <input class="input_little" type="tel" placeholder="Телефон*" required/>
                                                <input class="input_great" type="email" placeholder="E-mail*" required/>
                                                <textarea placeholder="Комментарий"></textarea>
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
    </div>
</template>

<script>
import FullPage from 'vue-fullpage.js';
import Map from './Map.vue';
import Callback from './Callback.vue'
export default {
    name: "Contacts",
    components: {
      FullPage,
      'AppMap': Map,
      'AppCallback': Callback,
},
    data () {
        return {
        callback: true,
        options: {
                paddingTop: '0',
                navigation: false,
                anchors: ['page1', 'page2', 'page3']
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
<style lang="scss" scoped>
#contacts{
    width:100vw;
    height:100vh;
}
.left_back{
  position: absolute;
  width: 50%;
  height:100%;
  background-color: rgba($color: #070506, $alpha: 0.9);
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
.wrap_section{
    width:100%;
    height: 100%;
}
.part{
    width: 50%;
    height: 100%;
    float:left;
}
.first_left_content_wrap{
    width: 74%;
    min-width: 500px;
    float: right;
    height: 100%;
    text-align: left;
}
.first_left_content_wrap table{
    width: 100%;
    height: 100%;
}
.first_left_title{
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0;
}
.first_left_subtitle{
    font-size: 0.8em;
    margin-top: 3px;
    margin-bottom: 25px;
}
.first_left_text{
    font-size: 0.8em;
    margin-bottom: 5px;
}
.first_left_phone{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1em;
    font-weight: bold;
    padding-left: 5px;
}
.first_left_email{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1em;
    font-weight: bold;
    color: #cba35d;
    padding-left: 5px;
    text-decoration: underline;
}
.first_left_adres{
    margin-bottom: 10px;
    margin-top: 0;
    font-size: 1em;
    font-weight: bold;
    padding-left: 5px;
}
.order_call{
    background-color: #ce4c4c;
    font-size: 0.8em;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 15px;
}
.second_left_content_wrap{
    width: 74%;
    min-width: 500px;
    float: right;
    height: 100%;
    text-align: left;
}
.second_left_content_wrap table{
    width: 100%;
    height: 100%;
}
.second_left_title{
    font-size: 1.3em;
    font-weight: bold;
}
.second_left_text{
    font-size: 0.8em;
    padding-right: 40px;
}
.second_right_content_wrap{
    width: 74%;
    min-width: 500px;
    float: left;
    height: 100%;
    text-align: left;
    padding-left: 50px;
}
.second_right_content_wrap table{
    width: 100%;
    height: 100%;
}
.form_parnter{
    width: 300px;
    height:260px;
    padding: 30px;
    background-color: rgba($color: #070506, $alpha: 0.2)
}
::-webkit-input-placeholder { 
    font-size: 0.9em;
  color: white;
}
::-moz-placeholder { 
  color: white;
  font-size: 0.9em;
}
:-ms-input-placeholder {
  color: white;
  font-size: 0.9em;
}
:-moz-placeholder { 
  color: white;
  font-size: 0.9em;
}
.input_full{
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    line-height: 0.4;
    color: white;
    outline: none;
    font-size: 0.8em;
}
.form_parnter textarea{
    height: 70px;
    border: 1px solid white;
    color: white;
    outline: none;
    background-color: transparent;
    width: 290px;
    padding: 5px;
    font-size: 0.9em;
    margin-top: 20px;
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
    font-size: 0.8em;
}
.input_great{
    width: 50%;
    float:left;
    height: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    line-height: 0.4;
    color: white;
    outline: none;
    font-size: 0.8em;
    margin-left: 5%;
}
.sumbit{
    background-color: #ce4c4c;
    font-size: 0.8em;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 15px;
}
.third_left_title{
    font-size: 1.5em;
    font-weight: bold;
}
.persons{
    width: 420px;
    height: 350px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(auto-fit);
}
.person{
    width: 100px;
    height: 150px;
    text-align: center;
}
.person img{
    width: 100px;
    height: 120px;
    object-fit: cover;
    float: left;
}
.first_name{
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0;
}
.second_name{
    margin-top: 0;
    font-size: 0.7em;
}
</style>

