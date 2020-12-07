<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/BlockCovid.png">
    <br>
    <HelloWorld msg="Bienvenue sur Blockcovid.be"/>
   

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods : {

  }
}

</script>
<style>
.mt-0{
margin-right: 50;
}
</style>