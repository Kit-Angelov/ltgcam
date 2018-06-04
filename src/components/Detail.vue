<template>
    <div id="detail">
        <div class="wrap">
            <div class="galery">
                <transition name="slide">
                    <div class="big_photo" :key="image">
                        <img :src='image' mode="out-in">
                    </div>
                </transition>
                <div class="miniature">
                    <p>Ещё фото</p>
                    <div class="miniature_wrap">
                        <div class="mini_wrap" v-for='(item, index) in content.images' :key="item">
                            <img :src="item" @click="choose(index)"> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="top_pane">
                    <p class="name">BMW Series 3</p>
                    <p class="price">15000 Руб</p>
                </div>
                <div class="descript">
                    <p>
                        Видеорегистратор LTG-CAM сконструирован специально для вашего автомобиля и после установки выглядит как штатное устройство.
                    </p>
                </div>
                <div class="attr">
                    <p>- FULL HD съёмка</p>
                    <p>- Удобство в управлении через фирменное мобильное приложение</p>
                    <p>- Не привлекает внимания злоумышленников</p>
                    <p>- Не создает помех для работы штатных систем автомобиля</p>
                    <p>- Интегрировано в интерьер автомобиля</p>
                    <p>- 2 года гарантии</p>
                </div>
                <div class="links">
                    <div class="first_link link">
                        <img class="link_ico" src="../assets/img/gear.svg">
                        <p>Технические характеристики</p>
                    </div>
                    <div class="second_link link">
                        <img class="link_ico" src="../assets/img/file.svg">
                        <p>Инструкция по установке (.pdf)</p>
                    </div>
                    <div class="third_link link">
                        <img class="link_ico" src="../assets/img/play.svg">
                        <p>Примеры видео</p>
                    </div>
                </div>
                <div class="buy_wrap">
                    <button>В КОРЗИНУ</button>
                    <p @click="$emit('popup')">Купить в 1 клик</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Detail',
    data () {
        return{
            content: {
                'images':[
                    "./dist/camera.jpg",
                    "./dist/ins01.png",
                    "./dist/ins02.png",
                    "./dist/ins03.png",
                    "./dist/ins04.png",
                    "./dist/camera.jpg"
                ]
            },
            image: "",
        }
    },
    mounted () {
        this.image = this.content['images'][0]
    },
    methods: {
        choose(index) {
            console.log(index);
            this.image = this.content.images[index]
        },
    }
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
    font-family: TextProMedium;
    float: left;
}
.price {
    margin-top:0;
    font-size: 16pt;
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
    cursor: pointer;
}
.link img{
    width: 18px;
    height: 18px;
    float: left;
    object-fit: cover
}
.link p {
    margin-top: 2px;
    margin-left: 7px;
    margin-bottom: 4px;
    font-size: 12pt;
    font-family: TextProLight;
    text-decoration: underline;
    float: left;
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
</style>

