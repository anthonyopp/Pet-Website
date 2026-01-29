<template>
  <div id="app">
    <!-- 全局导航栏 -->
    <Navbar />

    <!-- 主内容区域 -->
    <div class="main-content">
      <router-view /> <!-- 动态加载页面内容 -->
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <p>© 2025 宠物之家. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/MainNavbar.vue';

export default {
  name: 'App',
  components: {
    Navbar, // 导入导航栏组件
  },
};
</script>

<style>
/* 全局样式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>
