<template>
  <h1>Buscar</h1>
  <input v-model="cedula" type="text">
  <button @click="consultarCliente()">Buscar por cedula</button>
</template>

<script>
import {obtenerPorCedulaFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Buscar",
  data() {
    return {
      cedula: null,
    }
  },
  methods: {
    async consultarCliente() {
      const {nombre, apellido, cedula} = await obtenerPorCedulaFachada(this.cedula)
      console.log(nombre)
      console.log(apellido)
      console.log(cedula)
    },
  }
}
</script>

<style scoped>

</style>