<template>
  <span>
    <el-popover ref="popover5" v-model="showModal" placement="top-start" width="360">
      <img
        v-for="(v,i) in emojiList"
        :key="i"
        :src="require(`../../../static/faces/${v}`)"
        class="img-style"
        @click="selectEmoji(i)"
      >
    </el-popover>
    <van-icon v-popover:popover5 name="smile-o" size="20" color="rgba(0, 0, 0, 0.65)" />
  </span>
</template>

<script>
import emoji from '../../config/emoji'

export default {
  props: {
    inpMessage: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      emojiList: emoji.obj,
      currentEmoji: '',
      showModal: false
    }
  },
  methods: {
    selectEmoji(e) {
      const value = (this.inpMessage || '') + e
      this.$data.showModal = false
      this.$emit('selectEmoji', value)
    }
  }
}
</script>
<style scoped>
.img-style {
  width: 22px;
  margin: 5px;
  cursor: pointer;
}
.img-style:hover {
  background-color: aquamarine;
}
</style>
