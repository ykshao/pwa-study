<template>
  <div id="">
    <section class="section">
      <div class="container">
        <h1 class="title">Page B</h1>
      </div>
    </section>
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
      say: function () {
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
