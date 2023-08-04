import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    { path: "/", component: () => import('../pages/Bienvenida') },
    { path: "/consultar/:cedula", component: () => import('../pages/ConsultaEstudiante') },
    { path: "/actualizar", component: () => import('../pages/ActualizarEstudiante') },
    { path: "/eliminar", component: () => import('../pages/EliminarEstudiante') },
    { path: "/guardar", component: () => import('../pages/GuardaEstudiante') },
    { path: "/:pathMatch(.*)*", component: () => import('../pages/NotFound') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router