<template>
    <div class="about-us">
      <!-- 标题区 -->
      <el-row class="header-section" justify="center">
        <el-col :span="16">
          <h1 class="title">关于我们</h1>
          <p class="subtitle">
            我们致力于为您和您的宠物打造最专业、最贴心的服务平台。
          </p>
        </el-col>
      </el-row>
  
      <!-- 核心优势 -->
      <el-row class="advantages-section" justify="center" :gutter="20">
        <el-col :span="6" v-for="(advantage, index) in advantages" :key="index">
          <el-card class="advantage-card">
            <component :is="advantage.icon" :size="40"  class="advantage-icon" />
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </el-card>
        </el-col>
      </el-row>
  
      <!-- 团队介绍 -->
      <el-row class="team-section" justify="center">
        <el-col :span="16">
          <h2 class="section-title">我们的团队</h2>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(member, index) in team" :key="index">
              <el-card class="team-card">
                <img :src="member.avatar" alt="team member" class="team-avatar" />
                <h3>{{ member.name }}</h3>
                <p>{{ member.role }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
  
      <!-- 使命宣言 -->
      <el-row class="mission-section" justify="center">
        <el-col :span="16">
          <h2 class="section-title">我们的使命</h2>
          <p class="mission-text">
            宠物是家庭的重要成员，我们的使命是通过科技与关怀，为每一位宠物主人提供最安心、最便捷的服务体验。
          </p>
        </el-col>
      </el-row>
  
      <!-- 客户信任 -->
      <el-row class="clients-section" justify="center">
        <el-col :span="16">
          <h2 class="section-title">客户信任</h2>
          <el-row :gutter="20">
            <el-col :span="6" v-for="(client, index) in clients" :key="index">
              <el-card class="client-card">
                <img :src="client.logo" alt="client logo" class="client-logo" />
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import { SuccessFilled, DocumentChecked, Goods, ElementPlus} from "@element-plus/icons-vue";

  export default {
    components: {
    SuccessFilled,
    DocumentChecked,
    Goods,
    ElementPlus,
  },
    data() {
      return {
        advantages: [
          { icon: "SuccessFilled", title: "专业服务", description: "提供顶尖的宠物医疗与护理服务。" },
          { icon: "DocumentChecked", title: "贴心关怀", description: "关注宠物每个细节，为您分忧解难。" },
          { icon: "Goods", title: "高质量商品", description: "精选全球宠物用品，保证品质。" },
          { icon: "ElementPlus", title: "社区互动", description: "汇聚宠物爱好者，共享养宠经验。" },
        ],
        team: [
          { name: "张伟", role: "创始人", avatar: "https://th.bing.com/th/id/R.8a3eb3e66d7baa8696515ae544b2e367?rik=vGa0BjKSyHIV9A&riu=http%3a%2f%2fempic.dfcfw.com%2f961573693606330381%2fw1000h1000%2fart&ehk=3asLjDU7Lb%2fu7iLhzjKdQBbg%2fJc%2bKtyRlxHjucyGvtk%3d&risl=&pid=ImgRaw&r=0" },
          { name: "李娜", role: "首席兽医", avatar: "https://th.bing.com/th/id/OIP.0GI9YMPUAQF-O3X4vcIXLAHaHQ?rs=1&pid=ImgDetMain" },
          { name: "王强", role: "产品经理", avatar: "https://th.bing.com/th/id/OIP.2hznygWncTa8LEYBHhy4sAHaHW?rs=1&pid=ImgDetMain" },
        ],
        clients: [
          { logo: "https://static.vecteezy.com/system/resources/previews/006/470/731/original/modern-animal-pet-logo-template-free-vector.jpg" },
          { logo: "https://th.bing.com/th/id/OIP.lJDftVMr58wdM1kn6ZWvkwHaHa?rs=1&pid=ImgDetMain" },
          { logo: "https://i.pinimg.com/originals/dd/4e/85/dd4e85f51d2d9349d65613b7a47ff960.jpg" },
          { logo: "https://img.freepik.com/vector-premium/diseno-logotipo-degradado-letra-c_93835-1754.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-us {
    font-family: "Arial", sans-serif;
    line-height: 1.6;
  }
  
  .header-section {
    text-align: center;
    margin: 30px 0;
  }
  
  .title {
    font-size: 36px;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 18px;
    color: #666;
  }
  
  .advantages-section .advantage-card {
    text-align: center;
    padding: 20px;
  }
  
  .advantage-icon {
    color: #409eff;
    margin-bottom: 10px;
  }
  
  .team-section {
    margin: 50px 0;
  }
  
  .section-title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .team-card {
    text-align: center;
    padding: 20px;
  }
  
  .team-avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
  
  .mission-section {
    background-color: #f9f9f9;
    padding: 30px 0;
    text-align: center;
  }
  
  .mission-text {
    font-size: 18px;
    color: #555;
  }
  
  .clients-section {
    margin: 50px 0;
  }
  
  .client-logo {
    max-width: 100%;
    height: auto;
  }
  </style>
  