
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../../pages/index.vue'
import Recipe from '../../pages/recipe.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/recipe/:title', name: 'recipe', component: Recipe }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
