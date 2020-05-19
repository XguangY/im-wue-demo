<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import WebIM from './utils/WebIM'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  beforeMount() {
    const userInfo =
      localStorage.getItem('userInfo') &&
      JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo && userInfo.userId === this.$route.query.username) {
      const userName = userInfo.userId
      const password = userInfo.password
      var options = {
        apiUrl: WebIM.config.apiURL,
        user: userName,
        pwd: password,
        appKey: WebIM.config.appkey
      }
      WebIM.conn.open(options)
    } else {
      const userInfoQueryName = this.$route.query.username
      const userInfoQueryPass = this.$route.query.password
      if (userInfoQueryName && userInfoQueryPass) {
        this.onLogin({
          username: userInfoQueryName.toLowerCase(),
          password: userInfoQueryPass
        })
      }
    }
  },
  methods: {
    ...mapActions(['onLogin'])
  }
}
</script>

<style>
@import url("./utils/theme/base.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-message-box {
  width: 50%;
  max-width: 400px;
}
</style>
