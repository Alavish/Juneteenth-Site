import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27ca3eb4 = () => interopDefault(import('../entries/main/pages/businesses.vue' /* webpackChunkName: "entries/main/pages/businesses" */))
const _1b7a0e3f = () => interopDefault(import('../entries/main/pages/celebrate.vue' /* webpackChunkName: "entries/main/pages/celebrate" */))
const _0af7b627 = () => interopDefault(import('../entries/main/pages/donate.vue' /* webpackChunkName: "entries/main/pages/donate" */))
const _20b7f46c = () => interopDefault(import('../entries/main/pages/index.vue' /* webpackChunkName: "entries/main/pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/businesses",
    component: _27ca3eb4,
    name: "businesses"
  }, {
    path: "/celebrate",
    component: _1b7a0e3f,
    name: "celebrate"
  }, {
    path: "/donate",
    component: _0af7b627,
    name: "donate"
  }, {
    path: "/",
    component: _20b7f46c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
