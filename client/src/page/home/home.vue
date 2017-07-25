<template>
  <div class="home">
    <!--<router-link to="/login" v-if="!userInfo">登录</router-link>-->
    <p v-if="userInfo" class="user-info">您好，{{userInfo.name}}</p>
    <map-view v-if="userInfo" id="map"></map-view>
  </div>
</template>
<script>
  import headTop from '../../components/head/head'
  import mapView from '../../components/map-view/map-view.vue'
  import {mapState} from 'vuex'

  export default {
    created() {
      if (!this.userInfo) {
        this.$router.push('/login')
      }
    },
    mounted() {
      if (this.userInfo) {
        document.getElementById('map').style.height = window.innerHeight + 'px'
        window.onresize = function () {
          document.getElementById('map').style.height = window.innerHeight + 'px'
        }
      }
    },
    data () {
      return {

      }
    },
    components: {
      headTop,
      mapView
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
    }
  }
</script>
<style scope>
  .user-info {
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 10;
  }
</style>
