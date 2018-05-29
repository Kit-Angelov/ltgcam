<template>
  <div id="wrap_catalog">
      <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="top_pane">
            <div class="wrap_top_pane">
                <div class="navigate_text">
                    <p class="title_text">Видеорегистраторы -></p>
                    <p class="selectet_text">BMW</p>
                </div>
                <div class="navigate_select">
                    <select>
                        <option>BMW</option>
                        <option>AUDI</option>
                        <option>MERSEDES</option>
                    </select>
                    <p class="navigate_select_title">Марка автомобиля:</p>
                </div>
            </div>
        </div>
        <app-detail v-if="detail"></app-detail>
        <div class="main_wrap_content" v-else>
            <div class="wrap_content">
                <div class="content">
                <div class="content_item" v-for="item in content" :key="item.name">
                    <div class="content_item_wrap">
                        <img src="../assets/img/camera.jpg"/>
                        <div class="text">
                            <p class="name">{{ item.name }}</p>
                            <p class="descript">{{ item.descrip }}</p>
                            <p class="price">{{ item.price }}</p>
                        </div>
                        <div class="basket_but_wrap">
                            <div class="basket_but">
                                <img class="basket_but_img" src="../assets/img/add.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  </div>
</template>

<script>
import Detail from './Detail.vue';
export default {
  name: 'Catalog',
  components: {
      'AppDetail': Detail,
  },
  data () {
    return {
        detail: true,
        content: [
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            },
            {
            "img": "../assets/img/camera.jpg",
            "name": "BMW Series 3",
            "descrip": "Lorem ipsum dolor sit amet",
            "price": 15000
            }
        ]
    }
  },
}
</script>

<style lang="scss" scoped>

.back_catalog{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
}
.top_pane{
    position:absolute;
    width: 100%;
    top: 20vh;
}
.navigate_text, .navigate_select{
    width: 50%;
    float: left;
}
.navigate_text p {
    float: left;
}
.navigate_select p, .navigate_select select{
    float: right;
}
.navigate_select select{
    width: 150px;
    margin-top: 16px;
    margin-left: 20px;
}
.main_wrap_content{
    position: absolute;
    top: 40vh;
    width: 100%;
    height: 250px;
}
.wrap_content{
    width: 74%;
    min-width: 1000px;
    margin: auto;
    height: 100%;
    overflow-y: scroll;
}
.wrap_top_pane{
    width: 74%;
    min-width: 1000px;
    margin: auto;
}
.content{
    display: grid;
    width: 100%;
    height: auto;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit);
}
.content_item{
    float: left;
    height: 250px
}
.content_item_wrap{
    width:95%;
    height: 100%;
}
.content_item_wrap img{
    width: 100%;
    height: 150px;
    object-fit: cover;
}
.text{
    width: 80%;
    height: 50px;
    text-align: left;
    float: left;
}
.text p{
    line-height: 0.4;
}
.name{
    font-weight: bold;
    font-size: 0.8em;
}
.descript{
    font-size: 0.7em;
}
.price{
    color: #cba35d;
    font-size: 0.8em;
    font-weight: bold;
}
.basket_but_wrap{
    width: 20%;
    height: 50px;
    float: left;
}
.basket_but{
    margin-top: 15px;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    float: right;
    background-color:#ce4c4c;
}
.basket_but img{
    width: 14px;
    height: auto;
    margin-top: 8px;
}
</style>