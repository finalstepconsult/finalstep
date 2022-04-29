import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Alphabase from "../views/Alphabase.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import PostDetail from "../views/PostDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: 'Blog'
    }
  },

  {
    path: "/alphabase",
    name: "Alphabase",
    component: Alphabase,
    meta: {
      title: 'Alphabase'
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'About'
    }
  },

  {
    path: "/service",
    name: "Service",
    component: Service,
    meta: {
      title: 'Service'
    }
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/reset-password",
    name: "ForgetPassword",
    component: ForgetPassword,
    meta: {
      title: 'Reset-password'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: 'Admin'
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'create-post'
    }
  },
  {
    path: "/preview-post",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'preview-post'
    }
  },
  {
    path: "/post-detail",
    name: "PostDetail",
    component: PostDetail,
    meta: {
      title: 'post-detail'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | Finalstep`;
  next();
})

export default router;
