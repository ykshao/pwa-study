<template>
  <div>
    <mt-header title="用户列表"></mt-header>
    <mt-cell v-for="item in people" :key="item.id" :title="item.randomEmail" is-link
             :to="{name: 'userDetail', params: { id: item.id }}">
      <span>{{item.name}}</span>
      <img slot="icon" :src="item.avatar" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'hello',
    data () {
      return {
        // people: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapState({
        'people': 'peopleList'
      })
    },
    mounted: function () {
      console.log(JSON.stringify(this.people))
      // this.$http.get('/api/people').then((response) => {
      //   this.people = response.body
      // })
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
