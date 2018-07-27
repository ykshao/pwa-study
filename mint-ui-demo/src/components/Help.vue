<template>
  <div>
    <mt-header title="帮助"></mt-header>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'help',
    data () {
      return {
        people: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function () {},
    methods: {
      handleClick: function () {
        MessageBox.confirm('Are you sure?').then(action => {
          alert(action)
        })
      }
    }
  }
</script>

<style scoped>

</style>
