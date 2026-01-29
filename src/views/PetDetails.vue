<template>
    <div>
      <div class="scroll-container">
        <el-card shadow="hover" class="pet-details-card" v-for="pet in pets" :key="pet.id">
          <h2 class="pet-title">{{ pet.name }}的详情</h2>
          <el-row :gutter="20">
            <!-- 图片区域 -->
            <el-col :span="24" :sm="8">
              <img :src="pet.image" alt="pet" class="pet-image" />
            </el-col>
            <!-- 信息区域 -->
            <el-col :span="24" :sm="16">
              <div class="pet-info">
                <el-descriptions border column="1" title="宠物信息" size="big">
                  <el-descriptions-item label="名字">{{ pet.name }}</el-descriptions-item>
                  <el-descriptions-item label="性格">{{ pet.character }}</el-descriptions-item>
                  <el-descriptions-item label="年龄">{{ pet.age }}</el-descriptions-item>
                  <el-descriptions-item label="品种">{{ pet.breed }}</el-descriptions-item>
                  <el-descriptions-item label="体重">{{ pet.weight }}</el-descriptions-item>
                  <el-descriptions-item label="主人建议">{{ pet.ownerTips }}</el-descriptions-item>
                </el-descriptions>
                <div style="margin-top: 20px;">
                  <el-tag v-for="tag in pet.tags" :key="tag" type="success" style="margin-right: 5px;">
                    {{ tag }}
                  </el-tag>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
  import { pets } from '@/petsdetail';

  export default {
    data() {
      return {
        pets: pets
      };
    },
  };
  </script>
  
  <style scoped>
  .pet-details-card {
    margin-bottom: 20px;
  }
  
  .pet-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .pet-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .pet-info {
    margin-left: 20px;
  }
  
  .el-descriptions-item {
    font-size: 14px;
  }
  
  .el-tag {
    font-size: 12px;
    margin-right: 5px;
  }
  
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .el-card {
    width: 90%;
    margin-bottom: 20px;
  }
  
  .el-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  </style>
  