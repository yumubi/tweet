<script setup>
import {onMounted, ref} from "vue";
import Loadding from "@/components/Loadding.vue";


  const emit = defineEmits(['sessionExpired'])
  const labels = ref();
  const session = ref();
  onMounted(async () => {
    let sessionStr = window.localStorage.getItem("session")
    if(sessionStr) {
      session.value = JSON.parse(sessionStr)
    }

    let opts = {}
    if(session.value) {
      opts.headers = {
        "Authorization": session.value.apiKey,
      }
    }

    let resp = await fetch('https://api.lowlevelnews.com/o/labels', opts)
    if(resp.headers.get("X-Session-Valid") === "false") {
      let head = resp.headers.get("X-Session-Valid");
      emit("sessionExpired")
    }
    labels.value = await resp.json()
  })
</script>

<template>
  <div v-if="labels" class="sidelabels">
    <h2>热点</h2>
    <ul>
      <li v-for="label in labels.v">

        <div class="label">#{{ label.value}}</div>
        <div class="count">{{label.count}}</div>
      </li>
    </ul>
  </div>
  <Loadding v-if="!labels"></Loadding>
</template>

<style scoped>
      .sidelabels {
        width: 300px;
        border: 1px solid rgb(239, 243, 244);
        //border: 1px solid indigo;
        border-radius: 16px;
        padding: 0 0 16px 0;
background-color: rgb(247,249,249);
        margin-top: 20px;
      }

      .sidelabels li {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
      }
      .sidelabels li:hover {
background-color: rgba(0,0,0,0.04);
        cursor: pointer;
        transition: .4s;
      }

      .sidelabels .label {
        font-weight: bold;
        font-size: 15px;
      }

      .sidelabels .count {
        font-size: 14px;
        color: #666;
      }

      h2 {
        padding: 6px 15px;
        font-size: 20px;
        font-weight: bold;
      }


</style>