<template>
  <h1>Insertar</h1>
  <input v-model="id" type="text">
  <button @click="insertar()">Insertar</button>
</template>

<script>
import {insertarFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Insertar",
  data(){
    return {
      id: null
    }
  },
  methods:{
    insertar(){
      const miCliente = {
        nombre:"Kenlly",
        apellido:"Chacon",
        genero:"M"
      }
      insertarFachada(miCliente);
    }
  }
}
</script>

<style scoped>

</style>