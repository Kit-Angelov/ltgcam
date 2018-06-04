<template>
    <div id="instruction">
        <div class="ins_navigate_row">
            <div class="ins_navigate_col">
                <div class="ins_navigate_line_wrap">
                <div class="ins_navigate_arrow ins_navigate_arrow_up" @click="prev()">
                    <img class="ins_arrow ins_up" src="../assets/img/down-arrow.svg">
                </div>
                <div class="ins_navigate_line ins_navigate_line_top"></div>
                <div class="ins_navigate_line ins_navigate_line_mid"></div>
                <div class="ins_navigate_arrow ins_navigate_arrow_down" @click="next()">
                    <img class="ins_arrow ins_down" src="../assets/img/down-arrow.svg">
                </div>
                </div>
            </div>
        </div>
        <img class="ins_back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="ins_title_wrap">
            <div class="ins_title_content">
                <p class="ins_title">УСТАНОВКА</p>
                <p class="ins_title_text">
                    Метод установки зависит от автомобиля.<br/>
                    Некоторые автомобили имеют незначительные различия в методе, но в большинстве случаев он схож. 
                </p>
            </div>
        </div>
        <full-page :options="options" id="fullpage">
            <div class="section ins_first_section">
                <div class="ins_wrap_section">
                    <div class="ins_grid_wrap">
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins01.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять пластиковый кожух</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins02.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Приготовить регистратор<br/>к установке</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins03.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Закрепить регистратор на кожух до щелчка</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins04.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять боковую накладку рамки стекла</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section ins_second_section">
                <div class="ins_wrap_section">
                    <div class="ins_grid_wrap">
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins05.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять боковую накладку приборной панели</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins06.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Протянуть провод HOST<br/>к регистратору</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins07.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p class="many_text">Через зеркало заднего вида по внутреннему каналу
                                                под обшивкой потолка
                                                и боковой обшивкой
                                                к блоку предохранителей
                                                проянуть провод HOST
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins08.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>У регистратора 3 провода:<br/>
                                            желтый (BAT B+),<br/>
                                            красный (ACC)<br/>
                                            и чёрный (масса)</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section ins_third_section">
                <div class="ins_wrap_section">
                    <div class="ins_grid_wrap">
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins09.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p class="many_text">
                                                Желтый подключить в место с постоянным током,
                                                где независимо от положения ключа зажигания
                                                подаётся 12V; красный подключить в место, куда
                                                подаётся ток при зажигании 
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins10.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Массу крепим<br/>на корпус</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins11.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Подкючит провод<br/>
                                                от регистратора<br/>
                                                к проводу HOST
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="ins_elem_grid">
                            <img src="../assets/img/ins12.png">
                            <div class="ins_elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>
                                                Установить кожух<br/>
                                                с регистратором
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
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
    name: 'Instruction',
    components: {
      FullPage,
      'AppSocCop': SocialCopir,
    },
    data () {
        return{
            options: {
                paddingTop: '0',
                navigation: true,
            }
        }
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
@media all and (max-width: 1251px) {
    .ins_navigate_row{
        left:95% !important;
    }
    #fp-nav{
      left:95% !important;
    }
}
.ins_navigate_row{
  height: 180px;
  position: fixed;
  width: 20px;
  top:50%;
  left: 87%;
  margin-top: -125px;
  margin-left: -20px;
  z-index: 9;
}
.ins_navigate_col{
  width: 100%;
  height: 100%;
  margin: auto;
}
.ins_navigate_line_wrap{
  width: 1px;
  height: 100%;
  float: right;
}
.ins_navigate_line{
  width: 1px;
  background-color: white;
  height:60px;
  margin-bottom:5px;
  margin-top:5px;
  float: left;
}
.ins_navigate_arrow{
  height: 10px;
  width: 18px;
  float: left;
  margin-left: -9px;
  cursor: pointer;
}
.ins_navigate_arrow_up{
  margin-bottom: 30px;
}
.ins_navigate_arrow_down{
  margin-top: 20px;
}
.ins_arrow{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ins_up{
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
.ins_back_catalog{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
}
.ins_title_wrap{
    position: absolute;
    width: 100%;
    height: 70px;
    top:15vh;
    z-index: 99;
}
.ins_title_content{
    width: 74%;
    min-width: 1000px;
    height: 100%;
    margin: auto;
    text-align: left;
}
.ins_title{
    font-family: TextProBold;
    font-size: 26pt;
    margin-bottom: 0;
}
@media all and (max-width: 1367px) {
    .ins_title{
        font-family: TextProBold;
        font-size: 18pt;
        margin-bottom: 0;
    }
    .ins_title_text{
        margin-top: 5px;
        font-size: 10pt !important;
        font-family: TextProLight;
    }
}
.ins_title_text{
    margin-top: 5px;
    font-size: 12pt;
    font-family: TextProLight;
}
.ins_wrap_section{
    width:74%;
    min-width: 1000px;
    margin: auto;
    height: 100%;
}
.ins_grid_wrap{
    padding-top: 20%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, 47%);
    grid-template-rows: repeat(2, 27%);
}
.ins_elem_grid{
    background-color: transparent;
    width: 100%;
    height: 100%;
}
.ins_elem_grid img{
    width: 55%;
    height: 100%;
    object-fit: cover;
    float: left;
}
.ins_elem_text{
    float: left;
    width: 45%;
    height: 100%;
    text-align: center;
    background-color: rgba($color: black, $alpha: 0.6);
}
.ins_elem_text table{
    width: 75%;
    margin: auto;
    height:100%;
    vertical-align: middle;
    text-align: left;
}
.ins_elem_text p{
    font-size: 14pt;
    font-family: TextProMedium;
}
.many_text{
    font-size: 12pt !important;
}
@media all and (max-width: 1367px) {
.many_text{
    font-size: 10pt !important;
}
}

</style>


