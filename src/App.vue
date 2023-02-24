<template>
  <BuscarPorCedula/>
  <input v-model="cedula" type="text">
  <button @click="consultarCliente()">Buscar por cedula</button>
  <button @click="insertar()">Insertar</button>
</template>

<script>
import {obtenerPorCedulaFachada,insertarFachada} from "./js/api_facturacion/ProcesarCliente.js"
import BuscarPorCedula from "@/pages/BuscarPorCedula.vue";
export default {
  name: 'App',
  components: {
    BuscarPorCedula
  },
  data(){
    return{
      cedula:null,
    }
  },
  methods:{
    consultarCliente(cedula){
       const data = obtenerPorCedulaFachada(this.cedula)

    },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
