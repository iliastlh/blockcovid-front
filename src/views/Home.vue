<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/BlockCovid.png">
    <br>
    <HelloWorld msg="Bienvenue sur Blockcovid.be"/>
    <h3>Quel est votre Statut : </h3>
    <button type="button" class="btn btn-primary btn-lg active mt-0" id="btn-medecin">Medecin</button>
    <button type="button" class="btn btn-primary btn-lg active" id="btn-etablissement">Etablissement</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style >
.mt-0{
margin-right: 50;
}
</style>