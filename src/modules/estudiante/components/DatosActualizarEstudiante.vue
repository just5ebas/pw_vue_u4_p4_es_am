<template>
    <div>
      <label for="">Id</label>
      <input v-model="id" type="text" />  
      <label for="">Cedula</label>
      <input v-model="cedula" type="text" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
    </div>
  
    <button @click="actualizarEstudiante">actualizar</button>
  </template>
  
  <script>
  import { actualizarEstudianteFachada } from "../helpers/EstudianteClient.js";
  export default {
    data() {
      return {
        cedula: null,
        nombre: null,
        apellido: null,
        id: null
      };
    },
    methods: {
      async actualizarEstudiante() {
        const data = {
          
          cedula: this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          provincia: "Pichincha",
        };
  
        await actualizarEstudianteFachada(data, this.id);
      },
    },
  };
  </script>
  
  <style>
  div{
      display: block;
  }
  </style>