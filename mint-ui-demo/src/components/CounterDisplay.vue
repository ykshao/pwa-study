<template>
  <div class="registered">
    <!--Value: {{count}}
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>-->
    <p>我的信息-------{{myInfo}}</p>
    <mt-header title="注册的用户"></mt-header>
    <div class="list">
      <ul>
        <li v-for="registration in registrations">
          <mt-cell :title="registration.name"></mt-cell>
          <mt-button type="danger" size="small" @click="unregister(registration)">取消注册</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import { mapState, mapGetters, mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    props: ['myInfo'],
    computed: {
      ...mapGetters({
        registrations: 'registrations'
        // total: 'totalRegistrations'
      })
    },
    methods: {
      unregister (registration) {
        this.$store.commit({
          type: 'unregister',
          userId: registration.userId
        })
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  .registered {

  }

  .list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>
