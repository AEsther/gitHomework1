<template>
  <div class="hello">
      <a v-link="{path:'/home'}">home</a>
      <a v-link="{name:'one',params:{id:0}}">one</a>
      <a v-link="{path:'/home/two'}">two</a>
      <a v-link="{path:'/login'}">login</a>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info:"vue angular"
    }
  },
  methods:{
    test:function(){
      alert(this.info)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
a{
  display: inline-block;
  width: 70px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border: 1px solid green;
}
</style>
