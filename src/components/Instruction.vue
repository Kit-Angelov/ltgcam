<template>
    <div id="instruction">
        <img class="back_catalog" src="../assets/img/bg_black.jpg"/>
        <div class="title_wrap">
            <div class="title_content">
                <p class="title">УСТАНОВКА</p>
                <p class="title_text">
                    Метод установки зависит от автомобиля.<br/>
                    Некоторые автомобили имеют незначительные различия в методе, но в большинстве случаев он схож. 
                </p>
            </div>
        </div>
        <full-page :options="options" id="fullpage">
            <div class="section first_section" id="first">
                <div class="wrap_section">
                    <div class="grid_wrap">
                        <div class="elem_grid">
                            <img src="../assets/img/ins01.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять пластиковый кожух</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins02.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Приготовить регистратор<br/>к установке</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins03.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Закрепить регистратор на кожух до щелчка</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins04.png">
                            <div class="elem_text">
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
            <div class="section second_section" id="second">
                <div class="wrap_section">
                    <div class="grid_wrap">
                        <div class="elem_grid">
                            <img src="../assets/img/ins01.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять пластиковый кожух</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins02.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Приготовить регистратор<br/>к установке</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins03.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Закрепить регистратор на кожух до щелчка</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins04.png">
                            <div class="elem_text">
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
            <div class="section third_section" id="third">
                <div class="wrap_section">
                    <div class="grid_wrap">
                        <div class="elem_grid">
                            <img src="../assets/img/ins01.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Снять пластиковый кожух</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins02.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Приготовить регистратор<br/>к установке</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins03.png">
                            <div class="elem_text">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Закрепить регистратор на кожух до щелчка</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="elem_grid">
                            <img src="../assets/img/ins04.png">
                            <div class="elem_text">
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
        </full-page>
    </div>
</template>
<script>
import FullPage from 'vue-fullpage.js';
export default {
    name: 'Instruction',
    components: {
      FullPage,
    },
    destroyed: function() {
        $.fn.fullpage.destroy('all');
    }
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
.title_wrap{
    position: absolute;
    width: 100%;
    height: 70px;
    top:15vh;
    z-index: 99;
}
.title_content{
    width: 74%;
    min-width: 1000px;
    height: 100%;
    margin: auto;
    text-align: left;
}
.title{
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 0;
}
.title_text{
    margin-top: 5px;
    font-size: 0.8em;
}
.wrap_section{
    width:74%;
    min-width: 1000px;
    margin: auto;
    height: 50%;
    margin-top: 12vh;
}
.grid_wrap{
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, 47%);
    grid-template-rows: repeat(2);
}
.elem_grid{
    background-color: transparent;
    width: 100%;
    height: 100%;
}
.elem_grid img{
    width: 55%;
    height: 100%;
    object-fit: cover;
    float: left;
}
.elem_text{
    float: left;
    width: 45%;
    height: 100%;
    text-align: center;
    background-color: rgba($color: black, $alpha: 0.6);
}
.elem_text table{
    width: 75%;
    margin: auto;
    height:100%;
    vertical-align: middle;
    text-align: left;
}
.elem_text p{
    font-weight: bold;
    font-size: 1em;
}
</style>


