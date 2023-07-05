<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconExplore from "@/components/icons/IconExplore.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconSettings from "@/components/icons/IconSettings.vue";
import Login from "@/components/Login.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import IconBookmark from "@/components/icons/IconBookmark.vue";
import IconProfile from "@/components/icons/IconProfile.vue";
import Labels from "@/components/Labels.vue";
import {onMounted, ref} from "vue";
import AuthorizeView from "@/views/AuthorizeView.vue";

const session = ref(null)
onMounted(() => {
  if(window.localStorage.getItem("session") === null )
    window.localStorage.setItem("session",
        '{"apiKey":"sk-X6c2JAbe1nZNf37ob28WpWTY7cCHwm79ApvB15","id":"2uABUyySJBVxgz3zW","name":"Stellar Nolan","uniqueName":"鱿鱼须","picture":"https://lh3.googleusercontent.com/a/AAcHTtcvj9TWrsYBu9aam0Wwiho1AEj3g5jo--GmVyQ_5pnhoQ=s96-c","locale":"en","bio":"test","verifiedCode":0,"admin":false}')
  let sessionStr = window.localStorage.getItem("session")
  // 构造一个JSON字符串
  // let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
  // if(sessionStr === null) sessionStr = jsonString
  // console.log('seesionstr=' + JSON.stringify(sessionStr))
  console.log("sessionStr=" + JSON.stringify(sessionStr))
  if(sessionStr) {
    session.value = JSON.parse(sessionStr)
  }
})


</script>

<template>
  <div class="sidebar">
    <nav>
      <ul>

        <li>
          <RouterLink to="/"><IconHome/></RouterLink>
        </li>
        <li>
          <RouterLink to="/explore"><IconExplore/><span>{{session ? '主页' : '探索'}}</span></RouterLink>
        </li>
        <li v-if="session">
          <RouterLink to="/messages"><IconMessage/><span>消息</span></RouterLink>
        </li>

        <li v-if="session">
          <RouterLink to="/bookmarks"><IconBookmark/><span>书签</span></RouterLink>
        </li>

        <li v-if="session">
          <RouterLink :to="'/' + session.uniqueName"><IconProfile/><span>个人资料</span></RouterLink>
        </li>

        <li>
          <RouterLink to="/settings"><IconSettings/><span>设置</span></RouterLink>
        </li>
      </ul>
    </nav>
  </div>

  <div class="main-content">
    <RouterView/>
  </div>

  <div class="right-sidebar">
    <footer>
      <Login v-if="!session"/>
      <Labels/>
    </footer>
  </div>
</template>
<style scoped>
  nav {
    position: fixed;
    width: 300px;
    font-size: 18px;
  }


  nav ul li {
    padding: 5px;
  }

  nav a.router-link-exact-active span {
    font-weight: bold;
  }

  nav a {
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 10px 20px 10px 15px;
    border-radius: 30px;
    color: #2c3e50;
  }

  nav ul li:first-child a {
    width: 52px;
    height: 52px;
    padding: 0;
    justify-content: center;
  }

  nav a span {
    margin-left: 10px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 0 0 600px;
  }

  .main-content {
    flex: 1;
  }

  .right-sidebar {
    flex: 0 0 600px;
  }


  footer {
    position: fixed;
    padding:  0 20px;
  }

</style>
