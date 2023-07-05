<script setup>

import Status from "@/components/Status.vue";
import {markRaw, onMounted, ref} from "vue";
import Post from "@/components/Post.vue";

const session = ref(null)
const status = ref(null)

onMounted(async () => {
  let sessionStr = window.localStorage.getItem("session")
  if(sessionStr) {
    session.value = JSON.parse(sessionStr)
  }
  let resp = await fetch('https://api.lowlevelnews.com/o/explore')
  status.value = JSON.parse(sessionStr)
})



</script>

<template>
  <main>
    <h2>探索</h2>
    <Post v-if="session"/>
    <ul>
      <li v-for="s in status">
        <Status :status="s"></Status>
      </li>
    </ul>
  </main>
</template>

<style scoped>
    h2 {
      font-size: 20px;
      font-weight: bold;
      padding: 10px 20px;
      display: block;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      position: sticky;
      top: 0;
      backdrop-filter: blur(10px);
    }

    main {
      border-left: 1px solid rgb(239, 243, 244);
      border-right: 1px solid rgb(239, 243, 244);
    }

    main ul li {
      display: flex;
      padding: 10px 20px;
      transition: .5s;
      border-bottom: 1px solid rgb(239, 243, 244);
    }

    main ul li:hover {
      background-color: rgba(0, 0, 0, 0.03);
      cursor: pointer;
    }


</style>