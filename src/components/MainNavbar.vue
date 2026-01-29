<template>
  <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" background-color="transparent" text-color="#ecf0f1" active-text-color="#e74c3c">
    <!-- Logo 和店名 -->
    <el-menu-item class="logo">
      <img src="@/assets/pet_logo.png" alt="Logo" class="logo-img" />
      <span class="site-name">宠物之家</span>
    </el-menu-item>

    <!-- 导航链接，按钮式布局 -->
    <el-menu-item index="/" :class="{ active: active === '/' }" class="nav-button">
      <router-link to="/" class="nav-link">首页</router-link>
    </el-menu-item>
    <el-menu-item index="/pets" :class="{ active: active === '/pets' }" class="nav-button">
      <router-link to="/pets" class="nav-link">宠物列表</router-link>
    </el-menu-item>
    <el-menu-item index="/pets/details" :class="{ active: active === '/pets/details' }" class="nav-button">
      <router-link to="/pets/details" class="nav-link">宠物详情</router-link>
    </el-menu-item>
    <el-menu-item index="/pet_service" :class="{ active: active === '/pet_service' }" class="nav-button">
      <router-link to="/pet_service" class="nav-link">宠物服务</router-link>
    </el-menu-item>
    <el-menu-item index="/about_us" :class="{ active: active === '/about_us' }" class="nav-button">
      <router-link to="/about_us" class="nav-link">关于我们</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      active: this.$route.path, // 根据当前路由动态更新激活状态
    };
  },
  watch: {
    '$route'(to) {
      this.active = to.path; // 当路由变化时，更新激活状态
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  padding: 0;
  background: linear-gradient(45deg, #2c3e50, #16a085); /* 渐变色背景 */
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-menu-item {
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
}

.el-menu-item a {
  color: #ecf0f1;
}

.el-menu-item:hover {
  background-color: #34495e;
}

.el-menu-item.active {
  background-color: #16a085;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
}

.logo-img {
  width: 150px;
  height: 100px;
  margin-right: 0px;
}

.site-name {
  color: #ecf0f1;
}

.nav-button {
  padding: 0 20px;
}

.nav-link {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.el-menu-item .el-icon {
  margin-right: 10px;
}
</style>
