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
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjc0ODY0NSwiZXhwIjoxNjkyNzc4NjQ1fQ.5XV_ndXbVG-cF5NwtlWkDy5jHcPr762HEaBY5856OJP-W8OHk6WvDpguwzMMgQ64lN8zFbKopuZpwHk8dL4IvA",
    "Mensaje": "Valor1"
  }
  console.log("AXIOS 2")
  const data = axios.get(`http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
  console.log(data);
  return data;


};

const ingresarEstudiante = async (bodyEstudiante , token) => {
  const headers = {
    "Authorization": "Bearer "+token,
    "Mensaje": "Valor1"
  }

  axios.post(`http://localhost:8080/API/1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjc0ODY0NSwiZXhwIjoxNjkyNzc4NjQ1fQ.5XV_ndXbVG-cF5NwtlWkDy5jHcPr762HEaBY5856OJP-W8OHk6WvDpguwzMMgQ64lN8zFbKopuZpwHk8dL4IvA",
    "Mensaje": "Valor1"
  }


  axios.put(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const eliminarEstudiante = async (id) => {
  const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjc0ODY0NSwiZXhwIjoxNjkyNzc4NjQ1fQ.5XV_ndXbVG-cF5NwtlWkDy5jHcPr762HEaBY5856OJP-W8OHk6WvDpguwzMMgQ64lN8zFbKopuZpwHk8dL4IvA",
    "Mensaje": "Valor1"
  }

  const data = axios.delete(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data);
  return data;
};


