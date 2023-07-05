<script setup>

import Title from "@/components/Title.vue";
</script>

<template>
  <main>
    <Title title="书签"/>
  </main>
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

main {
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
}

</style>