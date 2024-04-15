<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        :selected-keys="selectedKeys"
        mode="horizontal"
        :default-selected-keys="['1']"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/开始测试.jpg" />
            <div class="title">louisOj</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
// 默认主页
const selectedKeys = ref(["/"]);
// 路由跳转后，更新跳转后的路由信息
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const store = useStore();
console.log(store.state.user.loginUser);

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "louis",
    role: "admin",
  });
}, 3000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.logo {
  height: 60px;
}

.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  margin-left: 15px;
}
</style>
