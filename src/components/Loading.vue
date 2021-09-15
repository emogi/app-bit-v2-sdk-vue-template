<template>
  <div class="loading">
    <img :src="loadingGifSource" alt="Loading" class="loading-gif" />
  </div>
</template>

<script>
import hollerAppBitJsSdk from '@emogi/holler-app-bit-js-sdk'
export default {
  name: 'Loading',
  computed: {
    loadingGifSource() {
      return this.getImgUrl(hollerAppBitJsSdk.config?.theme || 'light')
    }
  },
  methods: {
    getImgUrl(theme) {
      return require(`@/assets/img/theme/loading-theme-${theme}.gif`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-gif {
    width: 60px;
  }
</style>