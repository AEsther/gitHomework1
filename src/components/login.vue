<template>
  <div class="">
      用户名：<input type="text" v-model="username">
      <br>
      <br>
      密　码：<input type="text" v-model="password">
      <br>
      <br>
      <button @click="login">登陆</button>
      <button @click="home">主页</button>
      <h2>from parent:{{info}}</h2>
      <h2>from parent parentev enent:{{info1}}</h2>
      <router-view></router-view>
  </div>

<!--   <p>
  第一种方法 ：events：{"事件名"} $broadcase（"事件名","内容"）  $dispatch（"事件名","内容"）  
  第二种方法：父向子发送  写一个属性 pmsg="ss"  子组件中  props:["pmsg"]//接收
  子向父发送 $emit(cev,"内容"); cev可改   子组件中 接收 v-on:cev="receive"    receive可改      在methods定义一个方法接从login传来的参数
</p> -->
</template>

<script>
export default {
  data () {
    return {
      username:"",
      password:"",
      info:"",
      info1:""
    }
  },
  events:{
    "parentev":function(msg){
      this.info1=msg
    }
  },
  props:["pmsg"],
  methods:{
    login:function(){
      this.info=this.pmsg;
      this.$emit("cev","chile message message1 message2")
      this.$http.get("./static/user.json").then(function(res){
        var user=res.body.username;
        var pass=res.body.password;
        if(this.username==user && this.password==pass){
          this.$router.go("/home")
        }
      })
      this.$dispatch("childev","child-->parent   dispatch")     //child-->parent
    },
    home:function(){
      this.$router.go("/home")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
