import hamburguesas from "../views/Hamburguesas.vue";
import perros from "../views/Perros.vue";
import pizzas from "../views/Pizzas.vue";
import bebidas from "../views/Bebidas.vue"
import postres from "../views/Postres.vue"
import promociones from "../views/Promociones.vue"
import nosotros from "../views/Nosotros.vue"


import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    {path:"/hamburguesas", component:hamburguesas},
    {path:"/perros", component:perros},
    {path:"/pizzas",component: pizzas},
    {path:"/bebidas", component: bebidas},
    {path:"/postres", component: postres},
    {path:"/nosotros", component: nosotros},
    {path:"/", component: promociones}

]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})