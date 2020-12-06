<template>
    <div class="container">
        <h1>{{mensaje}}</h1>
        <h2>{{ ejemplo }}</h2>

        <div>
            <input type="text" v-model="nombre">
            <h3>{{mensaje2}}</h3>
        </div>
        <h3>Mounted</h3>
        <div>
            <h3>{{mensaje_mounted}}</h3>
        </div>
        <h3>Axios</h3>
        <div class="row">
            <div v-for= "val in value" :key="val.id" class="col-4">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://placeimg.com/640/480/any" alt="">
                <div class="card-body">
                    <h5 class="card-title">Id: {{val.id}}</h5>
                    <p class="card-text">Título: {{val.title }}</p>
                    <a href="#" class="btn btn-success">OK</a>
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
        return{
            mensaje: 'Hola vue',
            number: 0,
            nombre: '',
            mensaje2:'',
            mensaje_mounted: '',
            value : []
        }
    },
    mounted () {
        this.mensaje_mounted = "Acá funciona el mounted"
        axios.get('https://jsonplaceholder.typicode.com/posts').then(respuesta => {
            this.value = respuesta.data
            console.log(this.value)
        })
        
    },
    computed:{
        ejemplo(){
            return this.mensaje.split('').reverse().join('');
        }
    },
    watch:{
        nombre: function(val){
            console.log(val)
            if (val == "juan"){
                this.mensaje2 = "Hola, bienvenido " + val;
            }
            else{
                this.mensaje2 = "";
            }
        }
    }
}
</script>