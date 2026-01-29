import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PetList from '../views/PetList.vue';
import PetDetails from '../views/PetDetails.vue';
import PetService from '../views/PetService.vue';
import AboutUs from '../views/AboutUs.vue';



const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/pets', name: 'PetList', component: PetList },
  { path: '/pets/details', name: 'PetDetails', component: PetDetails },
  { path: '/pet_service', name: 'PetService', component: PetService },
  { path: '/about_us', name: 'AboutUs', component: AboutUs },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
