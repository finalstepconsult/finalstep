import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Alphabase from "../views/Alphabase.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/alphabase",
    name: "Alphabase",
    component: Alphabase,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/service",
    name: "Service",
    component: Service,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
