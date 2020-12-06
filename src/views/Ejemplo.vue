<template>
    <div class="container">
        <h1>{{mensaje}}</h1>
        <h2>{{ ejemplo }}</h2>
        <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="text" v-model="number" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <button class="btn btn-primary" @click="number++" >+</button>
        <button class="btn btn-danger" @click="number--">-</button>

        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
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