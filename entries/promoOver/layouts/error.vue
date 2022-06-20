<template lang="pug">
  TemplateErrorPage(:error="error")
</template>

<script>
export default {
  name: 'ErrorLayout',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
