<template>
  <div class="home">
    <!-- 左侧-->
    <Nav />

    <!-- 右侧-->
    <div class="right">
      <div class="top">
        <button class="exit" @click="loginOut()">退出</button>
        <Breadcumb />
      </div>
      <div class="main-content">
        主题内容
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
import Nav from "./nav";
import Breadcumb from "./breadcumb";
export default {
  setup(props, { root }) {
    const loginOut = () => {
      root.$router.push("/login");
    };
    return {
      loginOut
    };
  },
  components: {
    Nav,
    Breadcumb
  }
};
</script>

<style scoped>
</style>