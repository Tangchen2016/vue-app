<template>
  <div>
    <div>{{msg}}, Page</div>
    <div>
      <p v-if="userInfo">你好，{{userInfo.name}}</p>
    </div>
  </div>
</template>




<script>
  import {mapState} from 'vuex'
  export default {
    props: ['msg'],
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      test () {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
