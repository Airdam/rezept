<template>
  <div class="index__main">
    <div class="index__wrapper">
      <h1 class="index__title">Rezeptübersicht</h1>
      <RecipeCard v-for="(recipe, index) in recipes" :key="index" :title="recipe.title"
        @click="goToRecipe(recipe.title)" />
    </div>
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
.index
  &__main
    height: 100vh
    width: 100vw
    display: flex
    align-items: center
    justify-content: center
    padding: 1rem
  &__wrapper
    background: #404040
    padding: 2rem
    border-radius: 1.5rem
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    gap: 1rem
    margin: auto 2rem
    width: 100%
  &__title
    font-size: 2rem
    margin-bottom: 1rem
    color: #fff

@media only screen and (min-width: 768px)
  .index
    &__wrapper
      width: auto
</style>
