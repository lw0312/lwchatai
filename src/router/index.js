import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          component: () => import("@/views/Video/video.vue"),
        },
        {
          path: "/video2",
          component: () => import("@/views/Video/video2.vue"),
        },
        {
          path: "/video3",
          component: () => import("@/views/Video/video3.vue"),
        },
        {
          path: "/video4",
          component: () => import("@/views/Video/video4.vue"),
        },
        {
          path: "/video5",
          component: () => import("@/views/Video/video5.vue"),
        },
        {
          path: "/video6",
          component: () => import("@/views/Video/video6.vue"),
        },
        {
          path: "/video7",
          component: () => import("@/views/Video/video7.vue"),
        },
        {
          path: "/video8",
          component: () => import("@/views/Video/video8.vue"),
        },
        {
          path: "/video9",
          component: () => import("@/views/Video/video9.vue"),
        },
        {
          path: "/video10",
          component: () => import("@/views/Video/video10.vue"),
        },
        {
          path: "/video11",
          component: () => import("@/views/Video/video11.vue"),
        },
        {
          path: "/img",
          component: () => import("@/views/Image/image.vue"),
        },
        {
          path: "/img2",
          component: () => import("@/views/Image/image2.vue"),
        },
        {
          path: "/img3",
          component: () => import("@/views/Image/image3.vue"),
        },
        {
          path: "/img4",
          component: () => import("@/views/Image/image4.vue"),
        },
        {
          path: "/img5",
          component: () => import("@/views/Image/image5.vue"),
        },
        {
          path: "/img6",
          component: () => import("@/views/Image/image6.vue"),
        },
        {
          path: "/img7",
          component: () => import("@/views/Image/image7.vue"),
        },
        {
          path: "/img8",
          component: () => import("@/views/Image/image8.vue"),
        },
      ],
    },
  ],
});
export default router;
