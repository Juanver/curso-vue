<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Soy la vista del HOME</h1>
    <HolaMundo msg="BIENVENIDO"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HolaMundo from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HolaMundo
  }
}
</script>
