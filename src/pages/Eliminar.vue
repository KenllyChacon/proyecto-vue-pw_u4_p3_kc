<template>
  <h1>Eliminar</h1>
  <input v-model="id" type="text">
  <button @click="eliminar()">Eliminar</button>
</template>

<script>
import {borrarPorCedulaFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Eliminar",
  data(){
    return {
      id: null
    }
  },
  methods:{
    eliminar(){
      borrarPorCedulaFachada(this.id)
    }
  }
}
</script>

<style scoped>

</style>