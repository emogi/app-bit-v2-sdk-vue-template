<template>
  <button
    @click="close"
    class="btn btn-transparent btn-no-padding btn-close"
    id="close-button"
    tabindex="3"
    aria-label="Close Holler Badge"
  >
    <img :src="closeBtnSrc" width="20" height="20" alt="Close App Bit" />
  </button>
</template>

<script>
import hollerAppBitJsSdk from '@emogi/holler-app-bit-js-sdk'

export default {
  name: "CloseBtn",
  computed: {
    closeBtnSrc() {
      return this.getImgUrl(hollerAppBitJsSdk.config?.theme || 'light')
    },
  },
  inject: {
    $messages: {
      from: '$messages'
    }
  },
  methods: {
    close() {
      try {
        hollerAppBitJsSdk.askToClose(this.askToCloseSuccessCallbackFn, this.askToCloseErrorCallbackFn)
      } catch(e) {
        this.$messages.handleError(e)
      }
    },
    askToCloseSuccessCallbackFn(response) {
      console.log(response)
    },
    askToCloseErrorCallbackFn(error) {
      this.$messages.handleError(error)
    },
    getImgUrl(theme) {
      return require(`@/assets/img/theme/close-icon-theme-${theme}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  #close-button {
    height: 20px;
    overflow: hidden;
    width: 20px;
    z-index: 2;
    border: 0;
    padding: 0;
    background: transparent;
  }
</style>
