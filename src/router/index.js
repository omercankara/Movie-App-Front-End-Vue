import { createRouter, createWebHistory } from 'vue-router'
import home from "../components/homeComp.vue"
import movie from "../components/Movies/movieComp.vue"
import actors from "../components/actors/actorsComp.vue"
import actorDetail from "../components/actors/actorDetails.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: movie
  },
  {
    path: '/actors',
    name: 'actors',
    component: actors
  },
  {
    path: '/actor/:id',
    name: 'actorDetail',
    component: actorDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
