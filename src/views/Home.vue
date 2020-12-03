<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HolaMundo msg="BIENVENIDO" number="Soy el número 1"/>
    <div>
      <button class="btn btn-primary" @click="aumentar">Aumentar</button>
      <button class="btn btn-danger" @click="disminuir">Disminuir</button>
      <p>{{ this.numero }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HolaMundo from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HolaMundo
  },
  data(){
    return{
      numero:0
    }
  },
  methods:{
    aumentar(){
      this.numero = this.numero + 1
    },
    disminuir(){
      this.numero = this.numero - 1
    }
  }
}
</script>
