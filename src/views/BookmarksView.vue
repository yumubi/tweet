<script setup>

import Title from "@/components/Title.vue";
import AuthorizeView from "@/App.vue";
import Loadding from "@/components/Loadding.vue";
</script>

<template>

  <main>
    <Title title="书签"/>
    <Loadding/>
  </main>

</template>

<style scoped>


main {
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
}

</style>