<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-form class="row" @submit.stop.prevent="agregarTarea">
          <b-form-group class="col-3" id="nombre-group-1" label="Nombre" label-for="nombre">
            <b-form-input
              id="nombre"
              name="nombre"
              v-model="$v.form.nombre.$model"
              :state="validateState('nombre')"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >Este campo es requerido</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="col-3" id="codigo-group-1" label="Código" label-for="codigo">
            <b-form-input
              id="codigo"
              name="codigo"
              v-model="$v.form.codigo.$model"
              :state="validateState('codigo')"
              aria-describedby="input-2-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >Este campo es requerido</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="col-3" id="precio-group-1" label="Precio" label-for="precio">
            <b-form-input
              id="precio"
              name="precio"
              v-model="$v.form.precio.$model"
              :state="validateState('precio')"
              aria-describedby="input-3-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-3-live-feedback"
            >Este campo es requerido</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="col-3" id="image-group-1" label="image" label-for="image">
            <b-form-input
              id="image"
              name="image"
              v-model="$v.form.image.$model"
              :state="validateState('image')"
              aria-describedby="input-4-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-4-live-feedback"
            >Este campo es requerido</b-form-invalid-feedback>
          </b-form-group>
          <div class="col-12">
            <b-button type="submit" variant="primary">Enviar</b-button>
            <b-button type="button" variant="success" @click="resetForm">Limpiar</b-button>
          </div>
        </b-form>
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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data(){
    return {
      form: {
        nombre: '',
        codigo: '',
        precio: '',
        image: '',
      },
      nueva_tarea: '',
      photos: [],
      productos:[
          
      ]
    }
  },
  validations: {
    form:{
      nombre: {
        required
      },
      codigo: {
        required,
        minLength: minLength(3)
      },
      precio: {
        required,
      },
      image: {
        required,
      }
    }
  },
  async mounted(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
    this.photos = data
    console.log(data)
  },
  methods:{
    validateState(nombre) {
      const { $dirty, $error } = this.$v.form[nombre];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        nombre : null,
        codigo : null,
        precio : null,
        image : null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    agregarTarea(){
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }else{
        this.productos.push({
          nombre: this.form.nombre,
          codigo: this.form.codigo,
          precio: this.form.precio,
          image: this.form.image
        })
      }
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