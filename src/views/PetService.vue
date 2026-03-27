<template>
  <div class="pet-services">
    <h1 class="seo-hidden">Pet Services</h1>
    <!-- 标题区 -->
    <el-row class="header-section" justify="center">
      <el-col :span="16">
        <h1 class="title">我们的宠物服务</h1>
        <p class="subtitle">
          为您和您的宠物提供专业、周到的服务，带来无与伦比的体验。
        </p>
      </el-col>
    </el-row>

    <!-- 服务种类展示 -->
    <el-row class="services-section" justify="center" :gutter="20">
      <el-col :span="8" v-for="(service, index) in services" :key="index">
        <el-card class="service-card" shadow="hover">
          <component :is="service.icon" class="service-icon" size="40" /> <!-- 这里换成el-icon会无法渲染出图标 -->
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <el-button type="primary" @click="bookService(service.title)">立即预约</el-button>
        </el-card>
      </el-col>
    </el-row>

    <!-- 服务优势展示 -->
    <el-row class="advantages-section" justify="center" :gutter="20">
      <el-col :span="6" v-for="(advantage, index) in advantages" :key="index">
        <el-card class="advantage-card">
          <component :is="advantage.icon" size="40" class="advantage-icon" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 客户评价 -->
    <el-row class="testimonials-section" justify="center">
      <el-col :span="16">
        <h2 class="section-title">客户评价</h2>
        <el-carousel :interval="3000" arrow="always"> <!-- direction="vertical" -->
          <el-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card">
              <p>"{{ testimonial.text }}"</p>
              <h4>- {{ testimonial.name }}</h4>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Edit, FirstAidKit, House, Present, Medal, Star, UserFilled} from "@element-plus/icons-vue";

export default {
  components: {
    Edit,
    FirstAidKit,
    House,
    Present,
    Medal,
    Star,
    UserFilled,
  },
  data() {
    return {
      services: [
        { icon: "Edit", title: "宠物护理", description: "提供专业的宠物美容、清洁与护理服务。" },
        { icon: "FirstAidKit", title: "健康检查", description: "为宠物提供全面的健康检查，确保它们身体状况良好。" },
        { icon: "House", title: "宠物寄养", description: "为您提供安全、舒适的宠物寄养服务。" },
        { icon: "Present", title: "宠物用品", description: "精选高品质宠物用品，满足宠物的日常需求。" },
      ],
      advantages: [
        { icon: "UserFilled", title: "专业团队", description: "由资深宠物专家和兽医团队提供服务。" },
        { icon: "Star", title: "高质量保障", description: "所有服务都保证高标准，确保宠物安全与健康。" },
        { icon: "Medal", title: "客户满意", description: "我们致力于让每位客户满意，提供个性化服务。" },
      ],
      testimonials: [
        { name: "Alice", text: "这里的服务非常专业，我的猫咪在这里得到了最好的护理。" },
        { name: "Eason", text: "宠物寄养服务很棒，环境非常干净安全，我非常放心。" },
        { name: "Anthony", text: "每次带宠物来看健康检查都很方便，医生很细心，超满意！" },
      ],
    };
  },
  methods: {
    bookService(serviceTitle) {
      alert(`您选择了${serviceTitle}服务！`);
    },
  },
};
</script>

<style scoped>
/* 样式保持不变 */
.pet-services {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
}

.header-section {
  text-align: center;
  margin: 40px 0;
}

.title {
  font-size: 36px;
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
  color: #666666;
}

.services-section .service-card {
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
  /* width: 300px; 固定宽度 */
  height: 250px; 
  overflow-y: auto; 
  /* box-sizing: border-box; */
}

.service-icon {
  color: #409eff;
  margin-bottom: 10px;
  max-height: 50px;
}

.advantages-section .advantage-card {
  text-align: center;
  padding: 20px;
}

.advantage-icon {
  color: #66b1f0;
  margin-bottom: 10px;
}

.testimonials-section {
  background-color: #f9f9f9;
  padding: 30px 0;
  text-align: center;
}

.testimonial-card {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
}

/* 自定义箭头样式 */
::v-deep(.el-carousel__arrow) {
  background-color: #f39c12; /* 设置箭头背景色 */
  border-radius: 50%; /* 让箭头背景成为圆形 */
  color: rgb(155, 35, 107); /* 修改箭头的颜色 */
  width: 40px; /* 调整宽度 */
  height: 40px; /* 调整高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  transition: all 0.3s ease;
}

::v-deep(.el-carousel__arrow:hover) {
  background-color: #e67e22; /* 悬停时的背景颜色 */
  /* transform: scale(1.1); 鼠标悬停放大效果 */
}

</style>
