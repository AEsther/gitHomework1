<template>
  <div class="hello">
    <h1>404</h1>
    <p>
      sorry，没有找到页面
    </p>
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
</style>
