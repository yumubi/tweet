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
import IconLogout from "@/components/icons/IconLogout.vue";

const session = ref(null)
onMounted(() => {
  console.log("开始执行!")
  if(window.localStorage.getItem("session") === null )
    window.localStorage.setItem("session",
        '{"apiKey":"sk-Ggp2fnys1qPKj4dKsFXinkLPnHYdXqPSG5Udd5","id":"2uABUyySJBVxgz3zW","name":"Stellar Nolan","uniqueName":"鱿鱼须","picture":"https://lh3.googleusercontent.com/a/AAcHTtcvj9TWrsYBu9aam0Wwiho1AEj3g5jo--GmVyQ_5pnhoQ=s96-c","locale":"en","bio":"test","verifiedCode":0,"admin":false,"bg":"/20230707/2uABUyySJBVxgz3zW/2uAjwrE1eBmEoAge6"}')
  console.log("执行完毕!")
  let sessionStr = window.localStorage.getItem("session")

  console.log("sessionStr=" + JSON.stringify(sessionStr))
  if(sessionStr) {
    session.value = JSON.parse(sessionStr)
  }
})

function logout() {
  session.value = null
}

</script>

<template>
  <div class="sidebar">
    <nav>
      <ul>

        <li>
          <RouterLink to="/"><IconHome/></RouterLink>
        </li>
        <li>
          <RouterLink to="/explore">
            <IconExplore/>
            <span>{{session ? '主页' : '探索'}}</span>
          </RouterLink>
        </li>
        <li v-if="session">
          <RouterLink to="/messages">
            <IconMessage/>
            <span>消息</span>
          </RouterLink>
        </li>

        <li v-if="session">
          <RouterLink to="/bookmarks">
            <IconBookmark/>
            <span>书签</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/settings">
            <IconSettings/>
            <span>设置</span>
          </RouterLink>
        </li>
      </ul>
      <div class="user" v-if="session">
        <RouterLink class="profile" :to="'/' + session.uniqueName">
          <img :src="session.picture" alt="avatar"/>
          <div class="name-area">
            <div class="n1">{{session.name}}</div>
            <div class="n2">@{{session.uniqueName}}</div>
          </div>
        </RouterLink>
        <RouterLink class="logout" to="/logout">
          <IconLogout/>
        </RouterLink>
      </div>
    </nav>
  </div>

  <div class="main-content">
    <RouterView/>
  </div>

  <div class="right-sidebar">
    <footer>
      <Login v-if="!session"/>
      <Labels @session-expired="logout"/>
      <div v-if="session" class="foot">
        <RouterLink to="/rules">服务条款</RouterLink>
        <RouterLink to="/privacypolicy">隐私政策</RouterLink>
      </div>
    </footer>
  </div>
</template>
<style scoped>
  nav {
    position: fixed;
    width: 300px;
    font-size: 18px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    justify-content: space-between;
  }

  .sidebar .user{
    display: flex;
    border-radius: 80px;
    width: 250px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 68px;
  }

  .sidebar .user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .sidebar .user .name-area {
    margin-left: 10px;
  }

  .sidebar .user .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 68px;
  }

  .sidebar .user .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0;
    margin-right: -5px;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  .sidebar .user a .n1 {
    font-weight: bold;
  }

  .sidebar .user a .n2 {
    font-size: 12px;
    color: #666;
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

  footer .foot {
    padding: 15px 15px;
    font-size: 14px;
  }

  footer .foot a {
    color: #666;
    margin: 0 10px 0 0;
  }

  footer .foot a:hover {
    text-decoration: underline;
    text-decoration-color: #666;
    background: none;
  }

</style>
