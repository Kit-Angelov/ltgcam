<template>
    <div id="callback">
        <div class="form_client">
            <form>
                <input class="input_full" placeholder="ФИО*" required/>
                <input class="input_full" type="tel" placeholder="Телефон*" required/>
                <textarea placeholder="Комментарий"></textarea>
                <button type="submit" class="sumbit">ЗАКАЗАТЬ ЗВОНОК</button>
                <p class="toback" @click="$emit('backTo')">Назад к контактам</p>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Callback",
    methods: {
        backTo() {
            callback = true;
        },
    }
}
</script>
<style scoped>
.form_client{
    width: 350px;
    height:240px;
    background-color: transparent;
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
.form_client textarea{
    height: 70px;
    border: 1px solid white;
    color: white;
    outline: none;
    background-color: transparent;
    width: 340px;
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
    background-color: #cf3835;
    font-size: 0.8em;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 10px 23px;
    padding-top: 12px;
    margin-top: 15px;
    float: left;
}
.sumbit:hover{
    background-color: #ce4c4c;
}
.sumbit:active{
    background-color: #cf3835;
}
.toback{
    text-decoration: underline;
    font-size: 0.8em;
    float: left;
    margin-left: 20px;
    padding-top: 14px;
    cursor: pointer;
}
</style>

