<template>
  <div class="recipe__wrapper" v-if="recipe">
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

<style lang="sass">
.recipe__wrapper
  display: flex
  justify-content: center
  align-items: center
  background: #b88080
  margin: 1rem
  border-radius: 1rem
  padding: 2rem

@media only screen and (min-width: 768px)
  .recipe__wrapper
    width: 33%
    margin: auto
    margin-top: 1rem
</style>
