<script setup>
  import {useRoute} from "vue-router";
  import {onMounted, ref} from "vue";
  import Title from "@/components/Title.vue";

  const route = useRoute()
  let message = ref("")

  onMounted(async () => {
    let resp = await fetch(`https://api.lowlevelnews.com/o/authorize/${route.params.provider}?state={route.query.state}&code={route.query.code}`, {
      method: "post",
    })
    let sessionObj = await resp.json()
    if(sessionObj.apiKey) {
      window.localStorage.setItem('session', JSON.stringify(sessionObj))
      resp.headers.forEach((value, name) => {
        console.log(`${name}: ${value}`)
      })
      window.location.href = resp.headers.get("X-Jump")
    } else {
      message.value = sessionObj
    }
  })
</script>


<template>
  <main>
    <Title title="认证"></Title>
    <div v-if="message" class="tips">{{message}}</div>
  </main>
</template>

<style scoped>

</style>