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
import PageNotFound from "../views/404Page.vue";
//import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import PostDetail from "../views/PostDetail.vue";
import EditPost from "../views/EditPost.vue";
//import firebase from "firebase/app";
import "firebase/auth";
import store from "../store/index.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: false,
    }
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: 'Blog',
      requiresAuth: false,
    }
  },

  {
    path: "/alphabase",
    name: "Alphabase",
    component: Alphabase,
    meta: {
      title: 'Alphabase',
      requiresAuth: false,
    }
  },

  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      title: '404-nopage-found',
      requiresAuth: false,
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'About',
      requiresAuth: false,
    }
  },

  {
    path: "/service",
    name: "Service",
    component: Service,
    meta: {
      title: 'Service',
      requiresAuth: false,
    }
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Contact',
      requiresAuth: false,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
      requiresAuth: false,
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register',
      requiresAuth: false,
    }
  },
  {
    path: "/reset-password",
    name: "ForgetPassword",
    component: ForgetPassword,
    meta: {
      title: 'Reset-password',
      requiresAuth: false,
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: 'Profile',
      //requiresAuth: true,
    }
  },
  {
    path: "/krate-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'create-post',
      requiresAuth: true,

    }
  },
  {
    path: "/prevue-post",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'preview-post',
      requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: "/post-detail/:blogid",
    name: "PostDetail",
    component: PostDetail,
    meta: {
      title: 'post-detail',
      requiresAuth: false,
    }
  },
  {
    path: "/edt-post/:blogid",
    name: "EditPost",
    component: EditPost,
    meta: {
      title: 'Edit Blog Post',
      requiresAuth: true,
      //requiresAdmin: true,
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
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && store.state.isAdmin) {
      console.log
      next()
  } else {
      next()
  }
})


export default router;
