import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "@/components/Layout";
import Home from "../views/home";
import Member from "../views/member";
import Supplier from "../views/supplier";
import Staff from "../views/staff";
import Goods from "../views/goods";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect:"/home",
    children:[
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta:{title:"首页"}
      },
      {
        path: "/member",
        name: "Member",
        component: Member,
        meta:{title:"会员管理"}
      },
      {
        path: "/supplier",
        name: "Supplier",
        component: Supplier,
        meta:{title:"供应商管理"}
      },
      {
        path: "/goods",
        name: "Goods",
        component: Goods,
        meta:{title:"商品管理"}
      },
      {
        path: "/staff",
        name: "Staff",
        component: Staff,
        meta:{title:"员工管理"}
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
