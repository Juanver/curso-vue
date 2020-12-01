<template>
  <div class="about">
    <h1>SOY LA VISTA about</h1>
    <p>{{this.data1}}</p>
    <p>{{this.data2}}</p>
    <img :alt='name' :src='url'>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data1: 'soy la data 1',
      data2: 1000,
      data3: '',
      name:'logo',
      url:'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    }
  }
}
</script>