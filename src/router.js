import Vue from "vue";
import Router from "vue-router";

import LoginFirst from "@/views/LoginFirst";
import ErrorComponent from "@/views/Error";
import Home from "@/views/Home";
import Status from "@/views/Status";
import Curses from "@/views/Curses";
import Progress from "@/views/Progress";
import Works from "@/views/Works";
import Perfil from "@/views/Perfil";
import WorkPersonal from "@/views/WorkPersonal";

import { fb } from "./helpers/firebase";

Vue.use(Router);

function checkAuth() {
  return new Promise(resolve => fb.auth().onAuthStateChanged(resolve));
}

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "login",
      component: LoginFirst,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next("/home");
        else next();
      }
    },

    {
      path: "home",
      name: "home",
      component: Home,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
    },

    {
      path: "estados",
      name: "estados",
      component: Status,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
    },

    {
      path: "progreso",
      name: "progreso",
      component: Progress,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
    },

    {
      path: "work",
      name: "work",
      component: Works,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
    },


    {
      path: "cursos",
      name: "cursos",
      component: Curses,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
    },

    {
      path: "perfil",
      name: "perfil",
      component: Perfil,
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
<<<<<<< HEAD
    },

    {
      path: 'workPersonal/:id',
      component: WorkPersonal,
      name: "workPersonal",
      async beforeEnter(to, from, next) {
        if (await checkAuth()) next();
        else next("/");
      }
=======
>>>>>>> 3a4088fd876a4b639bd6a71dd769310e10b55959
    },

    {
      path: "*",
      name: "error",
      component: ErrorComponent
    }
  ]
});

