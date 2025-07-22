<template>
  <div>
    <h1>{{ recipe.title }}</h1>
    <p>{{ recipe.description }}</p>
    <p>Kochdauer: {{ recipe.cookTime }}</p>
    <h3>Zutaten:</h3>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
    </ul>
    <h3>Schritte:</h3>
    <ol>
      <li v-for="(step, index) in recipe.steps" :key="index">{{ step }}</li>
    </ol>
  </div>
</template>

<script setup>
defineProps(['recipe'])
</script>
