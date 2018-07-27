<template>
  <section class="container">
    <div>
      <h1 class="title">Hi from {{ name }}</h1>
      <div class="links">
        <nuxt-link to="/">Home page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'dark',
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
    color: #41B883;
  }
</style>
