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

const obtenerEstudianteAPIAxios = async (cedula) => {
  // En el config enviaremos todas los datos de cabecera que quisieramos enviar
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2FzIiwiaWF0IjoxNjkyNzUwNDI2LCJleHAiOjE2OTI3NTE2MjZ9.z8ske0zt-YvjQqwlhX_Hcp8T9ri6dAmJMumAoP6Tyx1Wpgnr00uXhWAmEGmCv_BHyZS9U15pyrEZmZ_PnmSkaA",
    "Mensaje": "valor1"
  }

  console.log("AXIOS 2")
  const data = axios.get(`http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = async (bodyEstudiante) => {
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2FzIiwiaWF0IjoxNjkyNzUwNDI2LCJleHAiOjE2OTI3NTE2MjZ9.z8ske0zt-YvjQqwlhX_Hcp8T9ri6dAmJMumAoP6Tyx1Wpgnr00uXhWAmEGmCv_BHyZS9U15pyrEZmZ_PnmSkaA",
    "Mensaje": "valor1"
  }

  axios.post(`http://localhost:8080/API/1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2FzIiwiaWF0IjoxNjkyNzUwNDI2LCJleHAiOjE2OTI3NTE2MjZ9.z8ske0zt-YvjQqwlhX_Hcp8T9ri6dAmJMumAoP6Tyx1Wpgnr00uXhWAmEGmCv_BHyZS9U15pyrEZmZ_PnmSkaA",
    "Mensaje": "valor1"
  }

  axios.put(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const eliminarEstudiante = async (id) => {
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2FzIiwiaWF0IjoxNjkyNzUwNDI2LCJleHAiOjE2OTI3NTE2MjZ9.z8ske0zt-YvjQqwlhX_Hcp8T9ri6dAmJMumAoP6Tyx1Wpgnr00uXhWAmEGmCv_BHyZS9U15pyrEZmZ_PnmSkaA",
    "Mensaje": "valor1"
  }

  const data = axios.delete(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data);
  return data;
};


