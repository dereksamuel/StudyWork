import Vue from "vue";
import Router from "vue-router";

import LoginFirst from "@/views/LoginFirst";
import Error from "@/views/Error";
import Home from "@/views/Home";
import Status from "@/views/Status";
import Curses from "@/views/Curses";
import Progress from "@/views/Progress";
import Works from "@/views/Works";
import Perfil from "@/views/Perfil";

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
    },

    {
      path: "progreso",
      name: "progreso",
      component: Progress,
    },

    {
      path: "work",
      name: "work",
      component: Works,
    },


    {
      path: "cursos",
      name: "cursos",
      component: Curses,
    },

    {
      path: "perfil",
      name: "perfil",
      component: Perfil,
    },

    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
