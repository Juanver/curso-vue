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
    </div>
</template>
<script>
export default {
    data(){
        return{
            mensaje: 'Hola vue',
            number: 0,
            nombre: '',
            mensaje2:'',
            mensaje_mounted: ''
        }
    },
    mounted () {
        this.mensaje_mounted = "Acá funciona el mounted"
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