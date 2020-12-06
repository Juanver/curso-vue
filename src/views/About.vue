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
    <div class="row">
      <div v-for="(tarea, index) in tareas" :key="index" class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="tarea.image" :alt="tarea.nombre">
          <div class="card-body">
            <h5 class="card-title">Nombre: {{tarea.nombre}}</h5>
            <p class="card-text">Código: {{ tarea.codigo }}</p>
            <p class="card-text">Precio: $ {{ tarea.precio }}</p>
            <a href="#" class="btn btn-danger" @click="eliminarTarea">Eliminar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      nombre: '',
      codigo: '',
      precio: '',
      image: '',
      nueva_tarea: '',
      tareas:[
          
      ]
    }
  },
  methods:{
    agregarTarea(){
      this.tareas.push({
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
      this.tareas.splice(index, 1)
    }
  }
}
</script>