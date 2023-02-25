//Todas las rutas y paginas de mi aplicacion
import {createRouter, createWebHashHistory} from 'vue-router'

//Carga inicial donde se carga todo
/*//importar o paginas de los componentes que yo quiero importaros com paginas
import Buscar from '../pages/Buscar.vue'
import Actualizar from "@/pages/Actualizar.vue";
import Eliminar from "@/pages/Eliminar.vue";
import Insertar from "@/pages/Insertar.vue";

import Inicio from "@/pages/Inicio.vue";
import NoFound from "@/pages/NoFound.vue";

const routes = [
    {path: '/', component:Inicio},
    {path: '/buscar', component:Buscar},
    {path: '/actualizar', component:Actualizar},
    {path: '/eliminar', component:Eliminar},
    {path: '/insertar/nuevo', component:Insertar},
    {path: '/:pathMatch(.*)*', component:NoFound},
]*/

//Carga perezosa donde se trae bajo demanda
const routes = [
    {path: '/', component: () => import(/* webpackChunkName: "Inicio" */ '@/pages/Inicio.vue')},
    {path: '/buscar', component: () => import(/* webpackChunkName: "Buscar" */ '@/pages/Buscar.vue')},
    {path: '/actualizar', component: () => import(/* webpackChunkName: "Actualizar" */ '@/pages/Actualizar.vue')},
    {path: '/eliminar', component: () => import(/* webpackChunkName: "Eliminar" */ '@/pages/Eliminar.vue')},
    {path: '/insertar/nuevo', component: () => import(/* webpackChunkName: "Insertar" */ '@/pages/Insertar.vue')},
    {path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "NoFound" */ '@/pages/NoFound.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router