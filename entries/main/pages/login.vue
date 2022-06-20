<template lang="pug">
.login.page
  h1 Sign In
  FormLogin
</template>

<script>
export default {
  name: 'Login',
  middleware: 'unauthorized',
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
}
</style>
