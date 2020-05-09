
<template>
  <el-container>
    <div class="login">
      <div class="login-panel">
        <div class="logo">Web IM</div>
        <van-cell-group>
          <van-field v-model="username" equired placeholder="用户名" />
          <van-field v-model="password" type="password" placeholder="密码" required @keyup.13="toLogin" />
          <van-field v-show="isRegister == true" v-model="nickname" placeholder="昵称" />
        </van-cell-group>
        <van-button v-if="isRegister == true" type="default" @click="toRegister">注册</van-button>
        <van-button v-else type="default" @click="toLogin">登录</van-button>
      </div>
      <p v-if="isRegister == true" class="tip">
        已有账号?
        <span class="green" @click="changeType">去登录</span>
      </p>
      <p v-else class="tip">
        没有账号?
        <span class="green" @click="changeType">注册</span>
      </p>
    </div>
  </el-container>
</template>

<script>
import './index.less'
import { mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  computed: {
    isRegister() {
      return this.$store.state.login.isRegister
    }
  },
  mounted: function() {
    const path = this.isRegister ? '/register' : '/login'

    if (path !== location.pathname) {
      this.$router.push(path)
    }
  },
  methods: {
    ...mapActions(['onLogin', 'setRegisterFlag', 'onRegister']),
    toLogin() {
      this.onLogin({
        username: this.username.toLowerCase(),
        password: this.password
      })
    },
    toRegister() {
      this.onRegister({
        username: this.username.toLowerCase(),
        password: this.password,
        nickname: this.nickname.toLowerCase()
      })
    },
    changeType() {
      this.setRegisterFlag(!this.isRegister)
    }
  }
}
</script>
