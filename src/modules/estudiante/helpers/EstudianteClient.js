import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
};

export const ingresarEstudianteFachada = async (bodyEstudiante) => {
  await ingresarEstudiante(bodyEstudiante)
};

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

export const eliminarEstudianteFachada = async (id) => {
  return eliminarEstudiante(id);
};

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};

const headers = {
  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2FzIiwiaWF0IjoxNjkyODE0NTI5LCJleHAiOjE2OTI4MTU3Mjl9.YG0T0R8PfZNUxXnsN_cAesDIJ_ThvmH-3MptPEd4xJJLw6EAd_uBwGaWnk7MPQUEPUaAxXThP_r0i9whAmeJ6w",
  "Mensaje": "valor1"
}

const obtenerEstudianteAPIAxios = async (cedula) => {
  console.log("AXIOS 2")
  const data = axios.get(`http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = async (bodyEstudiante) => {
  axios.post(`http://localhost:8080/API/1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios.put(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const eliminarEstudiante = async (id) => {

  const data = axios.delete(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data);
  return data;
};


