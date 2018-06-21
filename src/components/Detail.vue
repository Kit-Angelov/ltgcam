<template>
    <div id="detail">
        <div class="wrap">
            <div class="galery">
                <transition name="fade">
                <iframe v-if="video_example" :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <div v-else class="galery_content">
                <transition name="slide">
                    <div class="big_photo" :key="image">
                        <img :src="image" mode="out-in">
                    </div>
                </transition>
                <div class="miniature">
                    <p>Ещё фото</p>
                    <div class="miniature_wrap">
                        <div class="mini_wrap" v-for='(item, index) in content.galery_photo' :key="item">
                            <img :src="item.photo" @click="choose(index)"> 
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
                        <p v-for="option in content.options" :key="option">- {{option.text}}</p>
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
                        <p>Инструкция по установке (.pdf)</p>
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
        }
    },
    props: ['itemId'],
    mounted () {
        this.$http.get(host + 'auto_model/' + this.itemid.toString() + '/').then(function(response) {
          this.content = response.data;
          this.image = response.data.main_photo.photo;
      }, function(error) {
          alert(error)
      });
    },
    methods: {
        choose(index) {
            this.image = this.content.galery_photo[index].photo
        },
        addToOrder() {
            localStorage.setItem('order', JSON.stringify(this.content));
        },
        video_example_on() {
            this.video_example = !this.video_example
        },
        tech_opt_on() {
            this.tech_opt = !this.tech_opt
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
    height: auto;
    float: left;
    text-align: left;
}
.tech_opt_block p{
    line-height: 0.5;
    font-size: 12pt;
    font-family: TextProLight;
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
</style>

