<template>
  <div id="app">
    one content
    <button @click="test">click</button>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      info: 'vue angular!',
      list:["aa","bb","cc"]
    }
  },
  methods:{
    test:function(){
      alert(this.info)
    }
  }
}
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
  margin-top: 60px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
