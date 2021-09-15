<template>
  <transition name="slide">
    <div id="error-wrapper" v-if="$messages.errors.length">
      <div class="error-messages">
        <div class="error-message" v-for="(message, index) in $messages.errors" :key="index">
          <div class="message">{{ message.message }}</div>
        </div>
      </div>
      <ErrorCloseBtn />
    </div>
  </transition>
</template>

<script>
import ErrorCloseBtn from './ErrorCloseBtn'

export default {
  name: 'ErrorDialog',
  components: {
    ErrorCloseBtn
  },
  inject: {
    $messages: {
      from: '$messages'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  .slide-enter-active,
  .slide-leave-active {
    transition: max-height 0.35s ease;
  }

  .slide-enter-to,
  .slide-leave-from {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    overflow: hidden;
  }

  #error-wrapper {
    align-items: center;
    background: $theme-orange;
    bottom: 0;
    color: $theme-white;
    display: flex;
    font-size: 14px;
    font-weight: 900;
    left: 0;
    padding: 12px 16px;
    position: absolute;
    width: calc(100% - 32px);
    z-index: 2;
    
    .error-message {
      padding-right: 12px;
      padding-bottom: 12px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>