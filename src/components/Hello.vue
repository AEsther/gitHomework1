<template>
  <div class="hello">
    <h1 v-show="$route.params.id!=0">{{$route.params.id}}</h1>
    <ul>
      <!-- <a v-link="{name:'one',params:{id:0}}">aa</a>
      <a v-link="{path:'/two'}">bb</a> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      list:["aa","bb","cc"]
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
