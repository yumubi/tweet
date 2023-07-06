<script setup>
  import AuthorizeView from "@/App.vue";

  defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <h2>{{title}}</h2>
</template>

<style scoped>
  h2 {
    font-size: 20px;
    font-weight: bold;
    padding: .5rem 1rem;
    display: block;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.5);
    position: sticky;
    backdrop-filter: blur(10px);
    color: #000;
  }
</style>