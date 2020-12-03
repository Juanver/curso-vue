<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HolaMundo msg="BIENVENIDO" number="Soy el número 1"/>
    <div>
      <button class="btn btn-primary" @click="aumentar">Aumentar</button>
      <button class="btn btn-danger" @click="disminuir">Disminuir</button>
      <p>{{ this.numero }}</p>
    </div>
    <div>
      <p>{{this.fruta_seleccionada}}</p>
      <form>
        <input v-model="fruta_seleccionada" value="manzana" type="radio" id="manzana" name="fruta">
        <label for="manzana">Manzana</label>
        <input v-model="fruta_seleccionada" value="pera" type="radio" id="pera" name="fruta">
        <label for="pera">Pera</label>
        <input v-model="fruta_seleccionada" value="naranja" type="radio" id="naranja" name="fruta">
        <label for="naranja">Naranja</label>

       <div>
          <input v-model="frutas" value="manzana" type="checkbox" id="manzana" name="manzana">
          <label for="manzana">Manzana</label>
          <input v-model="frutas" value="pera" type="checkbox" id="pera" name="pera">
          <label for="pera">Pera</label>
          <input v-model="frutas" value="naranja" type="checkbox" id="naranja" name="naranja">
          <label for="naranja">Naranja</label>
       </div>
      </form>
      <p>{{this.frutas}}</p>
    </div>
    <button class="btn btn-outline-primary" @click="mostrar">{{ show_box ? 'Ocultar' : 'Mostrar'}}</button>
    <div v-show="show_box">
      <p>Acá me muestro</p>
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
      numero:0,
      frutas:[],
      fruta_seleccionada:'',
      show_box: true
    }
  },
  methods:{
    aumentar(){
      this.numero = this.numero + 1
    },
    disminuir(){
      this.numero = this.numero - 1
    },
    mostrar(){
      this.show_box = !this.show_box
    }
  }
}
</script>
