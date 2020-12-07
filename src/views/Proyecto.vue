<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form class="row" @submit.prevent="agregarTarea">
          <div class="col-3">
            <input class="form-control mb-3" type="text" v-model="nombre" placeholder="Nombre">
          </div>
          <div class="col-3">
            <input class="form-control mb-3" type="text" v-model="codigo" placeholder="Código">
          </div>
          <div class="col-3">
            <input class="form-control mb-3" type="text" v-model="precio" placeholder="Precio">
          </div>
          <div class="col-3">
            <input class="form-control mb-3" type="text" v-model="image" placeholder="Link de imagen">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6 border_card">
        <h5>Tus productos</h5>
        <div class="row">
          <div v-for="(tarea, index) in productos" :key="index" class="col-6 mt-3">
            <div class="card" style="width: 12rem;">
              <img class="card-img-top" :src="tarea.image" :alt="tarea.nombre">
              <div class="card-body">
                <h6 class="card-title">Nombre: {{tarea.nombre}}</h6>
                <p class="card-text">Código: {{ tarea.codigo }}</p>
                <p class="card-text">Precio: $ {{ tarea.precio }}</p>
                <a href="#" class="btn btn-danger" @click="eliminarTarea">Eliminar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h5>Productos externos</h5>
        <div class="row">
          <div v-for="photo in photos" :key="photo.id" class="col-6 mt-3" :class=" photo.id < 10 ? 'd-block' : 'd-none'">
            <div v-if="photo.id > 0 && photo.id < 10">
              <div class="card" style="width: 12rem;">
                <img class="card-img-top" :src="photo.url" :alt="photo.url">
                <div class="card-body">
                  <h6 class="card-title">Id: {{photo.id}}</h6>
                  <p class="card-text">Título: {{ photo.title }}</p>
                  <a href="#" class="btn btn-success">OK</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      nombre: '',
      codigo: '',
      precio: '',
      image: '',
      nueva_tarea: '',
      photos: [],
      productos:[
          
      ]
    }
  },
  async mounted(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
    this.photos = data
    console.log(data)
  },
  methods:{
    agregarTarea(){
      this.productos.push({
        nombre: this.nombre,
        codigo: this.codigo,
        precio: this.precio,
        image: this.image
      })
      this.nombre = null
      this.codigo = null
      this.precio = null
      this.image = null
    },
    eliminarTarea(index){
      this.productos.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.border_card{
  border-right: 1px solid #42b983;
}
</style>