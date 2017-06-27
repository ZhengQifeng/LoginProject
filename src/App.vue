<template>  
  <div id="example" class="border-style">
    <div id="Title" class="text-center flex-row">
      <div class="mouse-hand" v-bind:class="{'TitleChecked':loginview}" v-on:click="titleLogin">登录</div>
      <div class="mouse-hand" v-bind:class="{'TitleChecked':registerview}" v-on:click="titleRegister">注册</div>
    </div>
    <login-content v-if="loginview"></login-content>
    <register-content v-if="registerview"></register-content>
  </div>
</template>
 
<script>
import LoginContent from './LoginContent.vue'
import RegisterContent from './RegisterContent.vue'
export default {
  name:'app',
  data () {
    return {
      msg: 'Hello World!',
      loginview:true,
      registerview:false
    }
  },
  components:{
    LoginContent,RegisterContent
  },
  methods:{
    titleLogin:function(event){
      this.loginview=true;
      this.registerview=false;
    },
    titleRegister:function(event){
      this.loginview=false;
      this.registerview=true;
    }
  }
}
</script>
 
<style>
body {
  width:100%;
  height: 100%;
  font-size:62.5%;
}
.mouse-hand{
  cursor: pointer;
}
#example{
  width:640px;
  height:448px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  border: 1px solid gray;
  background-color: white;
  font-size:3.5em;
}
#Title{
  height:15%;
  width:25%;
  padding-top:5%;
  margin: 0 auto;
}
#Title div{
  width:45%;
  text-align: center;
}
#Title div:first-child{
  margin-right: 10%;
}
.TitleChecked{
  border-bottom:2px solid #20a0ff;
}
.flex-column{
  display: flex;
  flex-direction: column;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.flex-around{
  justify-content: space-around;
}
</style>
