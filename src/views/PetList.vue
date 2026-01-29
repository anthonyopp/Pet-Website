<template>
    <div>
      <h2 class="title">宠物列表</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :key="pet.id" v-for="pet in pets">
          <el-card shadow="hover" :body-style="{ padding: '20px' }" class="pet-card">
            <img :src="pet.image" alt="pet" class="pet-image" />
            <h3 class="pet-name">{{ pet.name }}</h3>
            <p class="pet-desc">{{ pet.description }}</p>
            <el-button type="primary" size="small" :to="`/pets/${pet.id}`" class="details-button" plain>
              查看详情
            </el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import { pets } from '@/pets';

  export default {
    data() {
      return {
        pets: pets
      };
    },
  };
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    font-size: 2em;
    margin: 20px 0;
    color: #2c3e50;
  }
  
  .pet-card {
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .pet-card:hover {
    transform: translateY(-5px);
  }
  
  .pet-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .pet-name {
    font-size: 1.5em;
    color: #34495e;
    margin: 10px 0;
  }
  
  .pet-desc {
    font-size: 1em;
    color: #7f8c8d;
    margin-bottom: 10px;
  }
  
  .details-button {
    margin-top: 10px;
  }
  </style>
  