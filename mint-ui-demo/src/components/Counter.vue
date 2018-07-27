<template>
  <div class="un_register">
    <mt-header title="未注册的用户"></mt-header>
    <div class="list">
      <ul>
        <li v-for="user in users">
          <mt-cell :title="user.name"></mt-cell>
          <mt-button type="primary" size="small" @click="registerUser(user)">注册</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      users () {
        return this.$store.getters.unregisteredUsers
      }
    },
    methods: {
      registerUser (user) {
        this.$store.dispatch('register', user.id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .un_register {

  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  .list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

</style>
