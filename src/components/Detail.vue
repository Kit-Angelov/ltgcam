<template>
    <div id="detail">
        <div class="wrap">
            <div class="galery">
                <transition name="fade">
                <iframe v-if="video_example" :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div v-else class="galery_content">
                <transition name="slide">
                    <div class="big_photo" @click="open_detail_img()" :key="image">
                        <img :src="image" mode="out-in">
                    </div>
                </transition>
                <div class="miniature">
                    <p>Ещё фото</p>
                    <div class="miniature_wrap">
                        <div class="mini_wrap" v-for='(item, index) in detail_photo' :key="item.id">
                            <img :src="item" @click="choose(index)"> 
                        </div>
                    </div>
                </div>
                </div>
                </transition>
            </div>
            <div class="content">
                <div class="top_pane">
                    <p class="name">{{content.mark.name}} {{content.name}}</p>
                    <p class="price">{{content.price}} Руб</p>
                </div>
                <transition name="slide">
                    <div v-if="tech_opt" class="tech_opt_block">
                        <p>&#9679; Чипсет: {{content.options.chipset}}</p>
                        <p>&#9679; Кол-во пикселей: {{content.options.pixel}}</p>
                        <p>&#9679; Сенсор: {{content.options.sensor}}</p>
                        <p>&#9679; Размер матрицы: {{content.options.matrix}}</p>
                        <p>&#9679; Угол обзора: {{content.options.corner}}</p>
                        <p>&#9679; Микрофон: {{content.options.microphone}}</p>
                        <p>&#9679; SD карта: {{content.options.sd_card}}</p>
                        <p>&#9679; Рабочая температура: {{content.options.work_temp}}</p>
                        <p>&#9679; Портребление тока: {{content.options.amperage}}</p>
                        <p class="option_part">Видео</p>
                        <p>&#9679; Видео режимы: {{content.options.video_mode}}</p>
                        <p>&#9679; Формат записи / Видеокодек: {{content.options.video_codec}}</p>
                        <p>&#9679; Режим записи: {{content.options.video_rec_mode}}</p>
                        <p class="option_part">Фото</p>
                        <p>&#9679; Разрешение фото: {{content.options.photo_resol}}</p>
                        <p>&#9679; Формат фото: {{content.options.photo_codec}}</p>
                        <p class="option_part">Настройки</p>
                        <p>&#9679; Продолжительность записи: {{content.options.current}}</p>
                        <p>&#9679; Время: {{content.options.time}}</p>
                        <p>&#9679; Синхронизация со смартфоном WDR: {{content.options.WDR}}</p>
                        <p>&#9679; Скорость работы электронного затвора: {{content.options.shutter_speed}}</p>
                        <p>&#9679; Баланс белого: {{content.options.white_balance}}</p>
                        <p>&#9679; Частота: {{content.options.frequency}}</p>
                        <p>&#9679; G-Сенсор: {{content.options.g_sensor}}</p>
                        <p>&#9679; Интеграция с мультимедией автомобиля: {{content.options.integrations}}</p>
                        <p>&#9679; Wi-Fi: {{content.options.Wi_Fi}}</p>
                        <p>&#9679; Объектив: {{content.options.lens}}</p>
                        <p>&#9679; Языки: {{content.options.language}}</p>
                    </div>
                    <div v-else class="main_desc">
                        <div class="descript">
                            <p>
                                {{content.description.text}}
                            </p>
                        </div>
                        <div class="attr">
                            <p v-for="option in content.main_options" :key="option">- {{option.text}}</p>
                        </div>
                    </div>
                </transition>
                <div class="links">
                    <div class="first_link link">
                        <img @click="tech_opt_on()" class="link_ico" src="../assets/img/gear.svg">
                        <p v-if="tech_opt" @click="tech_opt_on()">Описание</p>
                        <p v-else @click="tech_opt_on()">Технические характеристики</p>
                    </div>
                    <div class="second_link link">
                        <img class="link_ico" src="../assets/img/file.svg">
                        <p @click="download_instruction()">Инструкция по эксплуатации (.pdf)</p>
                    </div>
                    <div class="third_link link">
                        <img @click="video_example_on()" class="link_ico" src="../assets/img/play.svg">
                        <p v-if="video_example" @click="video_example_on()">Фотогалерея</p>
                        <p v-else @click="video_example_on()">Примеры видео</p>
                    </div>
                </div>
                <div class="buy_wrap">
                    <button @click="$emit('tobasket')">В КОРЗИНУ</button>
                    <p @click="addToOrder();$emit('popup')">Купить в 1 клик</p>
                </div>
            </div>
        </div>
        <div class="detail_photo" v-if="detailImageFlag">
            <img class="close_detail_image" @click="detailImageFlag = false" src="../assets/img/close.svg">
            <div class="arrow_wrap arrow-back">
                <img class="arrow" @click="detail_back()" src="../assets/img/back.svg">
            </div>
            <div class="arrow_wrap arrow-next">
                <img class="arrow" @click="detail_next()" src="../assets/img/next.svg">
            </div>
            
            <div class="detail_photo_wrapper">
                <transition name="myfade">
                    <img class=detail_photo_img :src="detailImage" :key="detailImage">
                </transition>
            </div>
        </div>
        <div class="overlay_detail_photo" v-if="detailImageFlag"></div>
    </div>
</template>
<script>
import host from './host.js';
export default {
    name: 'Detail',
    data () {
        return{
            content: {},
            itemid: this.itemId,
            image: "",
            video: "https://www.youtube.com/embed/T7GDYujgluI",
            video_example: false,
            tech_opt: false,
            detail_photo: [],
            detailImage: '',
            detailImageFlag: false,
            currentIndexDetal: 0,
            allIndexDetail: 0
        }
    },
    props: ['itemId'],
    mounted () {
        this.$http.get(host + 'auto_model/' + this.itemid.toString() + '/').then(function(response) {
          this.content = response.data;
          this.image = response.data.main_photo.photo;
          this.detail_photo.push(response.data.main_photo.photo)
          for (let item of response.data.galery_photo) {
              this.detail_photo.push(item.photo)
          }
      }, function(error) {
          alert(error)
      });
    },
    methods: {
        detail_next () {
            if (this.currentIndexDetal == this.allIndexDetail) {
                this.currentIndexDetal = 0
            } else {
                this.currentIndexDetal += 1
            }
            this.detailImage = this.detail_photo[this.currentIndexDetal]
        },
        detail_back () {
            if (this.currentIndexDetal == 0) {
                this.currentIndexDetal = this.allIndexDetail
            } else {
                this.currentIndexDetal -= 1
            }
            this.detailImage = this.detail_photo[this.currentIndexDetal]
        },
        open_detail_img () {
            this.currentIndexDetal = this.detail_photo.indexOf(this.image)
            this.allIndexDetail = this.detail_photo.length - 1
            this.detailImage = this.detail_photo[this.currentIndexDetal]
            this.detailImageFlag = true
        },
        choose(index) {
            this.image = this.detail_photo[index]
        },
        addToOrder() {
            localStorage.setItem('order', JSON.stringify(this.content));
        },
        video_example_on() {
            this.video_example = !this.video_example
        },
        tech_opt_on() {
            this.tech_opt = !this.tech_opt
        },
        download_instruction() {
            window.location.href = host + 'static/shop/instruction.pdf'
        }
    },
}
</script>
<style lang="scss" scoped>
#detail{
    position: absolute;
    top: 30vh;
    width: 100%;
    height: 50vh;
}
.wrap{
    width: 74%;
    min-width: 1000px;
    height: 100%;
    margin: auto;
}
.galery{
    width: 48%;
    height: 100%;
    float: left;
    position: relative;
    overflow: hidden;
}
.big_photo{
    width: 100%;
    height: 100%;
}
.big_photo img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
.miniature{
    position: absolute;
    width:70px;
    height: 94%;
    top: 3%;
    left: 10px;
    background-color:rgba($color: #000000, $alpha: 0.7)
}
.miniature p{
    font-size: 0.7em;
    margin-top:9px;
    margin-bottom: 6px;
}
.miniature_wrap{
    width: 100%;
    height: 88%;
    overflow: auto;
}
.miniature_wrap::-webkit-scrollbar { 
    display: none; 
}
.mini_wrap{
    width:56px;
    height: 56px;
    float:left;
    margin-left: 7px;
    margin-bottom: 7px;
}
.mini_wrap img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
.slide-enter-active {
  animation: slideDown .5s;
}
.slide-leave-active {
  animation: slideDown .5s;
}
@keyframes slideDown {
	0% {
		transform: translateY(0);
	}
	100%{
		transform: translateY(-100%);
	}	
}
.content{
    width:47%;
    height: 100%;
    float: left;
    margin-left: 5%;
    position: relative;
}
.top_pane{
    width: 100%;
    height: 45px;
    float: left;
}
.name{
    margin-top:0;
    font-size: 20pt;
    margin-bottom: 20px;
    font-family: TextProMedium;
    float: left;
}
.price {
    margin-top:0;
    font-size: 16pt;
    margin-bottom: 20px;
    font-family: TextProMedium;
    float: right;
    color: #cba35d;
}
.descript{
    width: 100%;
    height: auto;
    text-align: left;
}
.descript p{
    font-size: 10pt;
    font-family: TextProLight;
    margin-top: 8px;
}
.tech_opt_block{
    width: 100%;
    height: 27vh;
    float: left;
    text-align: left;
    overflow-y: auto;
}
.tech_opt_block p{
    line-height: 1;
    font-size: 10pt;
    font-family: TextProLight;
}
.tech_opt_block::-webkit-scrollbar {
    width: 10px;
}

.tech_opt_block::-webkit-scrollbar-track {
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}

.tech_opt_block::-webkit-scrollbar-thumb {
    background-color: rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.5);
}
.main_desc{
    width: 100%;
    height: auto;
    float: left;
    text-align: left;
}
.attr{
    width: 100%;
    height: auto;
    float: left;
    text-align: left;
}
.attr p{
    line-height: 0.5;
    font-size: 12pt;
    font-family: TextProLight;
}
@media all and (max-width: 1367px) {
.attr p{
    line-height: 0.5;
    font-size: 10pt !important;
    font-family: TextProLight;
}
}
.links{
    width: 60%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
}
.link{
    width: 100%;
    float: left;
    height: auto;
    margin-top: 5px;

}
.link img{
    width: 18px;
    height: 18px;
    float: left;
    object-fit: cover;
    cursor: pointer;
}
.link p {
    margin-top: 2px;
    margin-left: 7px;
    margin-bottom: 4px;
    font-size: 12pt;
    font-family: TextProLight;
    text-decoration: underline;
    float: left;
    cursor: pointer;
}
.buy_wrap{
    width: 30%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: center;
}
.buy_wrap button{
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
.buy_wrap button:hover{
    background-color: #ce4c4c;
}
.buy_wrap button:active{
    background-color: #cf3835;
}
.buy_wrap p{
    text-decoration: underline;
    font-size: 12pt;
    font-family: TextProLight;
    margin-bottom: 4px;
    margin-top: 15px;
    cursor: pointer;
}
.galery_content{
    width: 100%;
    height: 100%;
}
.galery iframe{
    width: 100%;
    height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.detail_photo{
    height: 80vh;
    width: 80vw;
    position: fixed;
    z-index: 99999;
    top: 50%;
    left: 50%;
    margin-top: -40vh;
    margin-left: -40vw;
}
.detail_photo_wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.detail_photo_img{
    object-fit: cover;
    height: 100%;
    width: auto;
}
.overlay_detail_photo{
    position: fixed;
    z-index: 99998;
    background-color: rgba($color: #000000, $alpha: 0.8);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
.arrow_wrap{
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50%;
    margin-top: -25px;
    border-radius: 50%;
}
.arrow_wrap:hover {
    width: 46px;
    height: 46px;
    margin-top: -27px;
    border: 2px solid rgba($color: whitesmoke, $alpha: .8);
}
.arrow {
    width: 28px;
    height: 28px;
    object-fit: cover;
    cursor: pointer;
}
.arrow-back{
    left: 5vw;
}
.arrow-back:hover {
    left: calc(5vw - 2px);
}
.arrow-next{
    right: 5vw;
}
.arrow-next:hover {
    right: calc(5vw + 2px);
}
.arrow-back img{
    padding: 9px 14px 11px 8px;
}
.arrow-next img{
    padding: 9px 10px 11px 12px;
}
.close_detail_image{
    position: fixed;
    top: 20px;
    right:20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.myfade-enter-active, .myfade-leave-active {
  transition: opacity .2s;
}
.myfade-enter, .myfade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

