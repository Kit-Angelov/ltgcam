<template>
    <div id='delivery'>
        <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="wrap-delivery">
            <div class="content-delivery">
                <p class="title">ДОСТАВКА</p>
                <p class="sub-title">
                    Быстро и бесплатно доставим Ваш заказ по всей России
                </p>
                <div class="places">
                    <div class="place first_place">
                        <p class="name_place">
                            Москва и<br/>
                            область</p>
                        <p class="time_place">1-2 дня</p>
                    </div>
                    <div class="place second_place">
                        <p class="name_place">
                            Санкт-Петербург<br/>
                            и область</p>
                        <p class="time_place">
                            2-3 дня
                        </p>
                    </div>
                    <div class="place third_place">
                        <p class="name_place">
                            Другие<br/>
                            крупные города</p>
                        <p class="time_place">1-7 дней</p>
                    </div>
                    <div class="place forth_place">
                        <p class="name_place">
                            Отдалённые<br/>
                            населённые пункты</p>
                        <p class="time_place">7-10 дней</p>
                    </div>
                </div>
                <div class="descript">
                    <div class="left_part">
                        <p class="title_descript">О СЛУЖБЕ ДОСТАВКИ</p>
                        <p class="text_descript">
                            В случае доставки курьером покупатели могут<br/>
                            оплатить заказ как наличным, так и безналичным<br/>
                            способом
                        </p>
                        <p class="text_descript">
                            Услуги доставки оказывает курьерская служба<br/>
                            "СДЭК"
                        </p>
                        <p class="text_descript">
                            Нам очень важны ваши отзывы. Пожалуйста,<br/>
                            поделитесь предложениями<br/>
                            и мнением о сайте и сервисе, отправив письмо нам
                        </p>
                    </div>
                    <div class="right_part">
                        <p class="title_descript">СПОСОБЫ ОПЛАТЫ</p>
                        <p class="span_descript">Наличный расчёт</p>
                        <p class="text_descript">
                            Оплата заказа наличными возможна во всех<br/>
                            пунктах самовывоза и курьеру во всех регионах.
                        </p>
                        <p class="span_descript">Банковская карта</p>
                        <p class="text_descript">
                            Курьеры принимаю к оплате банковские карты.<br/>
                            Оплата заказ картой возможна во всех пунктах<br/>
                            самовывоза.<br/>
                            Оплата банковской картой через интернет<br/>
                            возможна через системы электронных платежей.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <app-soc-cop></app-soc-cop>
    </div>
</template>

<script>
import SocialCopir from './SocialCopir.vue'
export default {
    name: 'Delivery',
    components:{
        'AppSocCop': SocialCopir,
    }
}
</script>
<style lang="scss" scoped>

.back_catalog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
}
.wrap-delivery{
    width: 100%;
    height:80%;
    top:20%;
    position: absolute;
}
.content-delivery{
    width: 47%;
    min-width: 600px;
    margin: auto;
    height:100%;
    background-color: #070506;
    padding-left: 50px;
    padding-right: 40px;
    padding-top: 0;
    padding-bottom: 0;
    text-align: left;
}
.title{
    font-size: 1.7em;
    font-weight: bold;
    margin: 0;
    padding-top: 40px;
}
.sub-title{
    font-size: 0.8em;
    margin-top: 5px;
}
.places{
    width: 100%;
    height: auto;
}
.place{
    float:left;
}
.first_place{
    width: 20%;
    height:auto;
}
.second_place{
    width: 27%;
    height:auto;
}
.third_place{
    width: 26%;
    height:auto;
}
.forth_place{
    width: 27%;
    height:auto;
}
.name_place{
    font-size: 0.9em;
    font-weight: bold;
    color: #cba35d;
}
.time_place{
    font-size: 0.8em;
    font-weight: bold;
}
.descript{
    width: 100%;
    height: auto;
}
.left_part{
    width:48%;
    height: auto;
    float:left;
}
.right_part{
    float:left;
    width:47%;
    height: auto;
    margin-left:5%;
}
.title_descript{
    font-size: 1.2em;
    font-weight: bold;
}
.text_descript{
    font-size: 0.8em;
}
.span_descript{
    font-weight: bold;
    font-size: 0.9em;
    color: #cba35d;
}
</style>

