<template lang="pug">
.site-wrapper
  AppHeader
  main.site-wrapper--inner
    Nuxt(id="mainContent")
  AppFooter
</template>
<script>
export default {
  name: 'TemplateDefaultLayout',
  props: {
    site: {
      default: null,
      type: String,
    },
  },
}
</script>
