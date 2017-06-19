<template>
  <div>
    <head-top msg="Home"></head-top>
    <router-link to="/login" v-if="!userInfo">登录</router-link>
  </div>
</template>
<script>
  import headTop from '../../components/head/head'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {
      headTop
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    }
  }
</script>
<style scoped>

</style>
