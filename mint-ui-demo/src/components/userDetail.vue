<template>
  <div>
    userDetail
  </div>
</template>

<script>
  export default {
    name: 'userDetail',
    data () {
      return {
        people: [],
        msg: 'userDetail'
      }
    },
    mounted: function () {
      console.log('路由参数-------------%s', JSON.stringify(this.$route.params))
    },
    methods: {}
  }
</script>

<style scoped>

</style>
