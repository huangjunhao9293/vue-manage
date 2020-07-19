<template>
  <div class="nav">
    <ul>
      <li class="p-item">
        <a class="p-title">
          <i class="iconfont" icon-yonghu></i>
        </a>
        首页
      </li>
      <li class="p-item">
        <a class="p-title">
          <i class="iconfont" icon-yonghu></i>
        </a>
        数据统计
      </li>
      <li class="p-item">
        <a class="p-title">
          <i class="iconfont" icon-jiaoyu></i>
        </a>信息管理
        <ul class="c-item">
          <li>
            <a>列表展示</a>
          </li>
        </ul>
        <ul class="c-item">
          <li>
            <a>用户统计</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.nav {
  cursor: pointer;
  color: white;
  width: 200px;
  height: 730px;
  float: left;
  background-color: rgb(31, 61, 88);
}

.c-item {
  float: left;
}

ul {
  line-height: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  list-style: none;
}
li {
  font-size: 13px;
  padding: 10px;
  list-style: none;
}
</style>