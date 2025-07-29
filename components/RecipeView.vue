<template>
  <div class="view__main">
    <h1 class="view__title">{{ recipe.title }}</h1>
    <span class="view__recipe-title">Kochdauer: {{ recipe.cookTime }}</span>
    <p class="view__recipe-description">{{ recipe.description }}</p>
    <hr />
    <h3 class="view__steps">Zutaten:</h3>
    <ul class="view__list">
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ index + 1 }}. {{ ingredient }}</li>
    </ul>
    <hr />
    <h3 class="view__steps">Schritte:</h3>
    <ul class="view__list">
      <li v-for="(step, index) in recipe.steps" :key="index">{{ index + 1 }}: {{ step }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['recipe'])
</script>

<style lang="sass">
.view
  &__main
    width: 100%
    display: flex
    flex-direction: column
  &__title
    font-size: 1.35rem
    margin-bottom: 1rem
    color: #fff
  &__recipe
    &-title
      font-size: .85rem
      margin-bottom: 4px
      color: #fff
    &-description
      background: #753d3d
      padding: 1rem
      border-radius: 8px
      margin-bottom: 1rem
      color: #fff
      text-align: center
  &__steps
    margin: 8px 0 16px 0
    font-size: 1.1rem
    color: #fff
  &__list
    color: #fff
    margin-bottom: 1rem
</style>
