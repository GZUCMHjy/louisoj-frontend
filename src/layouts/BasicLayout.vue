<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <global-header></global-header>
      </a-layout-header>
      <a-layout-content class="content">
        <!--开发通用布局-->
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://myblog.louisbrilliant.vip/"
          >louisの个人博客网站</a
        ></a-layout-footer
      >
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
