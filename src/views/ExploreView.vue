<script setup>

import Status from "@/components/Status.vue";
import {markRaw, onMounted, ref} from "vue";
import Post from "@/components/Post.vue";
import Title from "@/components/Title.vue";
import Loadding from "@/components/Loadding.vue";

const session = ref(null)
const status = ref(null)

onMounted(async () => {
  let sessionStr = window.localStorage.getItem("session")
  if(sessionStr) {
    session.value = JSON.parse(sessionStr)
  }
  loadExploreData()
})

async function loadExploreData() {
  let resp = await fetch('https://api.lowlevelnews.com/o/explore')
  console.log("headers=" + JSON.stringify(resp.headers))
  if(resp.headers.get("X-Session-Valid") === "false") {
    console.log("session is null!")
    session.value = null
  }

  status.value = await resp.json()
}




</script>

<template>
  <main>
    <Title :title="session ? '主页' : '探索'"/>
    <Post v-if="session" @posted="loadExploreData"/>
    <ul v-if="status">
      <li v-for="s in status">
        <Status :status="s"></Status>
      </li>
    </ul>
    <loadding v-if="!status"/>
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
      transition: .5s, display 0.5s;
      border-bottom: 1px solid rgb(239, 243, 244);
    }

    main ul li:hover {
      background-color: rgba(0, 0, 0, 0.03);
      cursor: pointer;
    }


</style>