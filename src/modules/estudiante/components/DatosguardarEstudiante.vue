<template>
  <div>
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
  </div>

  <button @click="guardarEstudiante">Guardar</button>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteClient.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };

      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style>
div{
    display: block;
}
</style>