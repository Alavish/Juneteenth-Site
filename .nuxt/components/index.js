export const AppFooter = () => import('../../components/app/Footer.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const AppHamburger = () => import('../../components/app/Hamburger.vue' /* webpackChunkName: "components/app-hamburger" */).then(c => wrapFunctional(c.default || c))
export const AppHeader = () => import('../../components/app/Header.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const TemplateDefaultLayout = () => import('../../components/template/DefaultLayout.vue' /* webpackChunkName: "components/template-default-layout" */).then(c => wrapFunctional(c.default || c))
export const TemplateErrorPage = () => import('../../components/template/ErrorPage.vue' /* webpackChunkName: "components/template-error-page" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
