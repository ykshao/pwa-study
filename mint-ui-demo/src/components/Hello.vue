<template>
  <div id="intro">
    <div class="content">
      <Counter></Counter>
      <CounterDisplay :myInfo="myInfo"></CounterDisplay>
    </div>
  </div>
</template>

<script>
  import Counter from '@/components/Counter'
  import CounterDisplay from '@/components/CounterDisplay'
  export default {
    name: 'user',
    data: function () {
      return {
        value: [],
        myInfo: {}
      }
    },
    mounted: function () {
      this.$store.dispatch('incrementAsync', () => {
        this.myInfo = {
          name: '1111',
          age: 20
        }
      })
    },
    methods: {},
    components: {
      CounterDisplay,
      Counter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  .content {
    padding: 10px;
  }

</style>
