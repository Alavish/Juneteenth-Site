import { isMobile, isTablet } from '@/scripts/sizes'

export const state = () => ({
  isMobile: process.client ? isMobile() : false,
  isTablet: process.client ? isTablet() : false,
  loading: false,
  site: null,
})

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_SITE(state, site) {
    state.site = site
  },
  SET_MOBILE(state) {
    state.isMobile = isMobile()
  },
  SET_TABLET(state) {
    state.isTablet = isTablet()
  },
  SET_ISMENUOPEN(state, open) {
    state.isMenuOpen = open
  },
  SET_ISSIDEBAROUT(state, open) {
    state.isSideBarOpen = open
  },
}

export const actions = {
  init({ commit }, site) {
    commit('SET_SITE', site)
  },
  setLoading({ commit }, loading) {
    commit('SET_LOADING', loading)
  },
  setIsMobile({ commit }) {
    commit('SET_MOBILE')
  },
  setIsTablet({ commit }) {
    commit('SET_TABLET')
  },
  setMenuLoading({ commit }, open) {
    commit('SET_ISMENUOPEN', open)
  },
  setSidebar({ commit }, open) {
    commit('SET_ISSIDEBAROUT', open)
  },
}

export const root = {
  state,
  mutations,
  actions,
}
