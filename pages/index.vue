<template>
  <div>
    <h1 class="text-3xl text-red-500">Rezeptübersicht</h1>
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :title="recipe.title"
      @click="goToRecipe(recipe.title)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import { useRouter } from 'vue-router'

const recipes = ref([])
const router = useRouter()

const goToRecipe = (title) => {
  router.push({ name: 'recipe', params: { title } })
}

onMounted(async () => {
  const response = await fetch('/recipes.json')
  const data = await response.json()
  recipes.value = data
})
</script>

<style lang="sass">
.index__title
  font-size: 2rem
  color: red
</style>
