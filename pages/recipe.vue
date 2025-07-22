<template>
  <div v-if="recipe">
    <RecipeView :recipe="recipe" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import RecipeView from '../components/RecipeView.vue'

const recipe = ref(null)
const route = useRoute()

onMounted(async () => {
  const response = await fetch('/recipes.json')
  const data = await response.json()
  recipe.value = data.find((r) => r.title === route.params.title)
  console.log(route)
})
</script>
