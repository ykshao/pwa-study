<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">Welcome {{name}}!</h1>
      <div class="links">
        <nuxt-link to="/about">About page</nuxt-link>
        <nuxt-link to="/posts">posts index</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'dark',
  components: {
    Logo
  },
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>

<style scoped="true">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.links a {
  margin: 0 20px;
  color: #41B883;
}
</style>
