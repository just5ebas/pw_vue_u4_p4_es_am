<template>
    <label for="">Identificador</label>
    <input v-model="id" type="text">
    <button @click="eliminarEstudiante">eliminar</button>
  </template>
  
  <script>
  import {eliminarEstudianteFachada} from "../helpers/EstudianteClient.js"
  export default {
      data(){
          return{
              id:null,
            
          }
      }, 
      methods:{
         async eliminarEstudiante(){
             const id=this.id;
             eliminarEstudianteFachada(id)

          }
      }
  }
  </script>
  
  <style>
  
  </style>