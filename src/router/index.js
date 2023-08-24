import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Chat from "@/views/Chat/index.vue";

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
          path: "/img",
          component: () => import("@/views/Image/image.vue"),
        },
      ],
    },
  ],
});
export default router;
