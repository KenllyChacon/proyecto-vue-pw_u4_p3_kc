<template>
<h1>Actualizar</h1>
  <input v-model="id" type="text">
  <button @click="actualizar()">Actualizar</button>
</template>

<script>
import {actualizarFachada} from "@/js/api_facturacion/ProcesarCliente";

export default {
  name: "Actualizar",
  data(){
    return {
      id: null
    }
  },
  methods:{
    actualizar(){
      const miCliente = {
        nombre:"Kenlly",
        apellido:"Chacon",
        genero:"M"
      }
      actualizarFachada(this.id,miCliente);
    }
  }
}
</script>

<style scoped>

</style>