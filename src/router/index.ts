import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landing-page",
    component: () => import("../pages/LandingPage.vue"),
    meta: {
      title: "Weather App",
      meta: [
        {
          name: "description",
          description: "Landing page of weather app",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
