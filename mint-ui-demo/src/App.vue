<template>
  <div id="app">
    <!--<div class="layout_body">
      <img src="./assets/2.png" alt="Vue.js PWA">
    </div>-->
    <!--<router-link :to="{name: 'hello'}" class="nav-item r-item">hello</router-link>-->
    <!--<router-link :to="{name: 'intro'}" class="nav-item r-item">intro</router-link>-->
    <!--<router-link :to="{name: 'pageA'}" class="nav-item r-item">contact</router-link>-->
    <!--<router-link :to="{name: 'help'}" class="nav-item r-item">help</router-link>-->

    <router-view></router-view>
  </div>
</template>

<script>
//  import Intro from "./components/User.vue"
  export default {
//    components: {
//      Intro
//    },
    name: 'app',
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      toggleNav: function () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="sass">
.layout_body
  display: flex
  justify-content: center
  align-items: center
  img
    width: 100%
</style>
