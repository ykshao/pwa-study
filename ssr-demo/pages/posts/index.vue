<template>
  <div class="container">
    <h1 class="title">Blog</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <p class="links"><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'dark',
    asyncData ({ req, params }) {
      // We can return a Promise instead of calling the callback
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return { posts: res.data.slice(0, 5) }
        })
    },
    head: {
      title: 'List of posts'
    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
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
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    border: 1px #ddd solid;
    padding: 20px;
    text-align: left;
  }
  .links {
    padding-top: 15px;
  }

  .links a {
    margin: 0 20px;
    color: #41B883;
  }

</style>
