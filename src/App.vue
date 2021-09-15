<template>
  <div id="app-bit-wrapper">
    <div id="app-bit-close-btn">
      <CloseBtn />
    </div>
    <div id="app-bit-body">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <ErrorDialog />
</template>

<script>
import hollerAppBitJsSdk from '@emogi/holler-app-bit-js-sdk';
import themeService from './services/themeService';
import ErrorDialog from './components/messages/ErrorDialog';
import CloseBtn from './components/theme/CloseBtn.vue';

export default {
  name: 'App',
  components: {
    CloseBtn,
    ErrorDialog,
  },
  inject: {
    $messages: {
      from: '$messages',
    },
  },
  created() {
    // DISABLE LONG PRESS
    // if (process.env.NODE_ENV !== 'development') {
    //   window.oncontextmenu = function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    //   };
    // }

    // https://router.vuejs.org/api/#router-onready
    // this.$route.query is not always available
    // parse window.location.href
    const url = new URL(window.location.href);
    const theme = url.searchParams.get('theme');

    if (theme) {
      themeService.setTheme(theme);
    }

    const hollerAppBitInitCallbackFn = (params) => {
      // do some custom stuff with the passed in params
      console.log(hollerAppBitJsSdk.config, params);
    };

    // expose window.hollerAppBit methods
    hollerAppBitJsSdk.init(hollerAppBitInitCallbackFn);
    
  }
};
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  #app-bit-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    #app-bit-close-btn {
      margin-left: auto;
    }
    #app-bit-body {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
