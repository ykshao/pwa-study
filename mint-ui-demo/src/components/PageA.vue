<template>
      <div class="container">
        <div class="tabs">
          <ul>
            <router-link :to="{name: 'PagePicture'}" tag="li" active-class="is-active">
              <a href="javascript:void(0)">Picture</a>
            </router-link>
            <router-link :to="{name: 'PageMusic'}" tag="li" active-class="is-active">
              <a href="javascript:void(0)">Music</a>
            </router-link>
          </ul>
        </div>
        <div class="content">
          <h1>Hello World</h1>
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  export default {
    data: function () {
      return {
        users: [],
        items: [
          {title: 'title-1', description: 'description-1'},
          {title: 'title-2', description: 'description-2'},
          {title: 'title-3', description: 'description-3'},
          {title: 'title-4', description: 'description-4'}
        ]
      }
    },
    mounted: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.users = response.body
      })
    },
    methods: {
      sayName: function () {
        alert('111111')
      },
      saySelf: function (msg) {
        alert(msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
