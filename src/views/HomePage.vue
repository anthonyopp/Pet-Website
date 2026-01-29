<template>
  <div class="homepage">
    <!-- 背景 -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 class="title">欢迎来到宠物之家！</h1>
        <p class="subtitle">探索可爱的宠物和更多内容。</p>
        <router-link to="/pets">
          <el-button type="primary" size="large" class="cta-button">查看宠物列表</el-button>
        </router-link>
      </div>
    </div>

    <!-- 宠物推荐 -->
    <section class="pets-section">
      <h2>我们的推荐宠物</h2>
      <div class="pet-list">
        <el-card class="pet-item" :body-style="{ padding: '20px' }">
          <img src="https://n.sinaimg.cn/sinakd10118/560/w1080h1080/20200525/0200-itzixrt2179351.jpg" alt="宠物1" />
          <p>可爱的猫咪</p>
        </el-card>

        <el-card class="pet-item" :body-style="{ padding: '20px' }">
          <img src="https://th.bing.com/th/id/R.a4ed42e2baf1c650adb03b9d7e458b62?rik=Y3EWtRkEFq9PwQ&riu=http%3a%2f%2fpic11.nipic.com%2f20101115%2f6163721_102552846000_2.jpg&ehk=KpQEThDayaHRqDzwFc1bKmayeje8Gk%2fDj6Zrcf5x868%3d&risl=&pid=ImgRaw&r=0" alt="宠物2" />
          <p>活泼的小狗</p>
        </el-card>

        <el-card class="pet-item" :body-style="{ padding: '20px' }">
          <img src="https://nwzimg.wezhan.net/contents/sitefiles3607/18038568/images/8189481.gif" alt="宠物3" />
          <p>温顺的小兔子</p>
        </el-card>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="about-section">
      <h2>关于我们</h2>
      <p>
        在宠物之家，我们致力于为您提供最好的宠物选择和专业的宠物护理建议。无论您是宠物的新主人，还是已经有一段时间的经验，我们都能为您提供宝贵的帮助。
      </p>
      <el-button type="text" size="medium" @click="showMessage" class="about-btn">联系我们</el-button>
    </section>
  </div>
</template>

<script>
import { ElButton, ElCard, ElMessage } from 'element-plus';

export default {
  name: 'HomePage', // 页面组件的名称
  components: {
    ElButton,
    ElCard
  },
  methods: {
    showMessage() {
      ElMessage({
        message: '感谢您对宠物之家的关注！我们会尽快与您联系。',
        type: 'success'
      });
    }
  }
};
</script>

<style scoped>
/* 背景和标题 */
.hero {
  /* https://www.niyamla.com/wp-content/uploads/2021/08/Socialization-time-with-beginner-bird-owners.jpg */
  /* @/assets/宠物图.webp */
  background: url('@/assets/宠物图.webp') no-repeat center center; /* 在这里我对图片进行了响应优化 */
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
}

.hero-overlay {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* 背景透明度 */
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 3em;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e67e22;
}

/* 宠物推荐 */
.pets-section {
  padding: 50px 20px;
  background-color: #f4f4f4;
  text-align: center;
}

.pets-section h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.pet-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pet-item {
  width: 300px;
  text-align: center;
}

.pet-item img {
  width: 100%;
  border-radius: 8px;
}

.pet-item p {
  font-size: 1.2em;
  margin-top: 10px;
}

/* 关于我们 */
.about-section {
  padding: 50px 20px;
  text-align: center;
}

.about-section h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

.about-btn {
  margin-top: 20px;
  font-size: 1.1em;
}
</style>
