<template id="app">
  <div class="login">
    <p class="login-title">XXX教育信息管理系统</p>
    <div class="login-content">
      <div class="login-main">
        <div class="login-panel">
          <input type="text" v-model="user" placeholder="用户名" />
        </div>
        <div class="login-panel">
          <input type="text" v-model="password" placeholder="登录密码" />
        </div>
        <div class="log">
          <button @click="login()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const loginparams = reactive({
      user: "admin",
      password: "12345"
    });

    const login = () => {
      let { user, password } = loginparams;
      if (loginparams.user == "admin" && loginparams.password == "12345") {
        sessionStorage.setItem("username", loginparams.user);
        root.$router.push("/home");
      } else {
        alert("用户名或密码不正确");
      }
    };
    return {
      ...toRefs(loginparams),
      login
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 740px;
  padding: 0;
  margin: 0;
  background-color: rgb(4, 177, 245);
}
.login-title {
  padding-top: 220px;
  position: relative;
  width: 100%x;
  color: white;
}
p {
  margin: 0 auto;
  padding-left: 25px;
  font-size: 30px;
}

.login-content {
  height: 200px;
  text-align: center;
  background-color: white;
  padding: 20px;
}

.login-panel {
  padding-top: 20px;
}
input {
  outline-style: none;
  border: 1px solid rgb(9, 143, 231);
  border-radius: 3px;
  padding: 10px;
  width: 320px;
  font-weight: 700;
  font-family: Microsoft YaHei;
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

button {
  width: 345px; /* 宽度 */
  height: 45px; /* 高度 */
  margin-top: 15px;
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
}
button:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #5599ff;
}
</style>
