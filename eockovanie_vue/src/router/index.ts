import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "@/components/SignIn.vue";
import Mainpage from "@/views/Mainpage.vue";
import Dashboard from "@/views/Dashboard.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },

  {
    path: "/home",
    component: () => import('../views/Home.vue'),
    name: "home"
  },

  { path: '/',
    component: Mainpage
  },

  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/overview",
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: "/messages",
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue')
      },
      {
        path: "/profile",
        component: () => import(/* webpackChunkName: "Profile2" */ '../views/Profile.vue')
      },
      {
        path: "/settings",
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
});



router.beforeEach((to, from, next) => {
  const loggedInUserDetail = !!sessionStorage.getItem("accessToken");
  if (to.matched.some(m => m.meta.authGuard) && !loggedInUserDetail)
    next({ name: "login" });
  else next();
});

export default router
