<template>
  <div>
  
   <App-header></App-header>
   <App-navBar></App-navBar>
   <App-main></App-main>
   
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader"
import AppNavBar from "@/components/AppNavBar"
import AppMain from "@/components/AppMain"

export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  components:{
      AppHeader,
      AppNavBar,
      AppMain
  },
  methods: {}
}
</script>

<style scoped>
    .header{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        line-height:50px;
        background:#2d3a4b;
    }
    .navbar{
        position: absolute;
        width: 300px;
        top: 50px;
        left: 0;
        bottom:0;
        overflow-y:auto;
        background:#545c64;
    }
    .main{
        position: absolute;
        top: 50px;
        left: 300px;
        right: 0;
        bottom:0;
        padding: 10px;        
    }
</style>