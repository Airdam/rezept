<template>
  <div class="card" @click="$emit('click')">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style lang="sass">
.card
  padding: 1rem 1.5rem
  background: #1c1c1c
  border-radius: 1rem
  width: 300px
  text-align: center
  font-size: 1.15rem
  cursor: pointer
  color: #fff
</style>
