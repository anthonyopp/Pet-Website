import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PetList from '../views/PetList.vue';
import PetDetails from '../views/PetDetails.vue';
import PetService from '../views/PetService.vue';
import AboutUs from '../views/AboutUs.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'Pet Website | Home',
      description: 'Welcome to our pet website. Explore pets, pet services, and useful information for pet lovers.'
    }
  },
  {
    path: '/pets',
    name: 'PetList',
    component: PetList,
    meta: {
      title: 'Pet List | Pet Website',
      description: 'Browse our pet list and discover different pets available on our website.'
    }
  },
  {
    path: '/pets/details',
    name: 'PetDetails',
    component: PetDetails,
    meta: {
      title: 'Pet Details | Pet Website',
      description: 'View detailed information about pets, including descriptions, features, and more.'
    }
  },
  {
    path: '/pet_service',
    name: 'PetService',
    component: PetService,
    meta: {
      title: 'Pet Services | Pet Website',
      description: 'Explore our pet services including grooming, care, and other helpful services for pets.'
    }
  },
  {
    path: '/about_us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: 'About Us | Pet Website',
      description: 'Learn more about our pet website, our mission, and our passion for pets.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 自动切换每个页面的 SEO 标题和描述
router.afterEach((to) => {
  document.title = to.meta.title || 'Pet Website';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      'content',
      to.meta.description || 'Pet Website for pet lovers'
    );
  }
});

export default router;

// import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../views/HomePage.vue';
// import PetList from '../views/PetList.vue';
// import PetDetails from '../views/PetDetails.vue';
// import PetService from '../views/PetService.vue';
// import AboutUs from '../views/AboutUs.vue';



// const routes = [
//   { path: '/', name: 'HomePage', component: HomePage },
//   { path: '/pets', name: 'PetList', component: PetList },
//   { path: '/pets/details', name: 'PetDetails', component: PetDetails },
//   { path: '/pet_service', name: 'PetService', component: PetService },
//   { path: '/about_us', name: 'AboutUs', component: AboutUs },
  


// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
