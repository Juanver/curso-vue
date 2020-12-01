<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HolaMundo msg="BIENVENIDO" number="Soy el número 1"/>
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
