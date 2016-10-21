<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <!-- <login pmsg="parentev" v-on:cev="receive"></login> -->
    <router-view  pmsg="parentev" v-on:cev="receive"></router-view>
    <br>
    <button @click="sendchild">send</button>
    <h2>from child childev:{{info}}</h2>
    <h2>from child:{{info1}}</h2>
  </div>
   <p></p>
</template>
<script>
import Hello from './components/Hello'
import login from './components/login'

export default {
  data:function() {
    return {
      info:"",
      info1:""
    }
  },
  components: {
    Hello,login
  },
  events:{
    "childev":function(msg){
      this.info=msg;
    }
  },
  methods:{
    sendchild:function(){
      this.$broadcast("parentev","parent-->child   broadcast")   //parent-->child
    },
    receive:function(msg){
      this.info1=msg;
    }
  }
}

//zhaoxiaoru      sunjunBW        hujun-hujun
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
a{
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
