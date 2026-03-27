import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入 router
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 样式

// 创建 Vue 应用实例
const app = createApp(App);

// 使用插件
app.use(router);
app.use(ElementPlus);

// 检测是否为 PC 设备
function isPC() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return !/android|iphone|ipad|ipod|mobile|windows phone/i.test(userAgent); // 如果不是移动设备，说明是PC设备
  }
  
  // 跳转逻辑
  if (isPC()) {
    // 如果是 PC 端，继续加载网站
    app.mount('#app');
  } else {
    // 如果是移动设备，跳转到提示页面
    window.location.href = '/mobile-warning.html'; // 指定提示页面路径
  }



