<script setup>
import IconGoogle from "@/components/icons/IconGoogle.vue";
</script>

<template>
  <div class="sidelogin">
    <h2>初次使用，请先登录</h2>
    <div class="tips">看来你是新来的，立即登录,获取你自己的个性化时间线</div>
    <div class="btnarea">
      <a class="loginbtn" href="https://api.lowlevelnews.com/o/oidc/google">
      <IconGoogle/><span>使用Google账号登录</span>
      </a>
    </div>
    <div class="tips">
      登录即表示同意 <RouterLink to="/rules">服务条款</RouterLink>及 <RouterLink to="/privacypolicy">隐私政策</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .sidelogin {
    width: 300px;
    border: 1px solid rgb(239, 243, 244);
    border-radius: 16px;
    padding: 5px 15px;
    margin-top: 20px;

}

.sidelogin .loginbtn {
    border: 1px solid rgb(207, 217, 222);
    padding: 5px 10px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: center
}

.sidelogin .loginbtn span {
    margin-left: 6px;
    color: #222;
    font-weight: bolder;
}

.sidelogin .btnarea {
    margin: 20px 0;
}

.sidelogin .tips {
    margin: 10px 0;
    font-size: 13px;
    color: #666;
    line-height: 16px;
}

h2 {
    padding: 0 3px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
}
</style>