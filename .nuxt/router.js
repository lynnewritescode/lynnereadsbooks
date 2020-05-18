import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1798d605 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _60a9efd7 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _d18f85d0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _44214eac = () => interopDefault(import('../pages/categories/_single.vue' /* webpackChunkName: "pages/categories/_single" */))
const _3750b0ca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c7005fc2 = () => interopDefault(import('../pages/_singlePost.vue' /* webpackChunkName: "pages/_singlePost" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1798d605,
    name: "about"
  }, {
    path: "/categories",
    component: _60a9efd7,
    name: "categories"
  }, {
    path: "/contact",
    component: _d18f85d0,
    name: "contact"
  }, {
    path: "/categories/:single",
    component: _44214eac,
    name: "categories-single"
  }, {
    path: "/",
    component: _3750b0ca,
    name: "index"
  }, {
    path: "/:singlePost",
    component: _c7005fc2,
    name: "singlePost"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
