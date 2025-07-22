<template>
  <div class="card" @click="$emit('click')">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped></style>
