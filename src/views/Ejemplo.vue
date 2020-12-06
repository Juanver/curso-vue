<template>
    <div class="container">
        <h1>{{mensaje}}</h1>
        <h2>{{ ejemplo }}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mensaje: 'Hola vue',
            number: 0
        }
    },
    computed:{
        ejemplo(){
            return this.mensaje.split('').reverse().join('');
        }
    }
}
</script>