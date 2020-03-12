<template>
  <div id="q-app">
    <router-view />
    <div class="filter tw-fixed tw-bottom-0 tw-left-0 tw-w-screen tw-h-12 tw-text-white">
      hej hej hej
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import { version } from '../package.json'
export default {
  name: 'App',
  metaInfo: {
    changed (metaInfo) {
      firebase.analytics().setCurrentScreen(metaInfo.title)
      firebase.analytics().logEvent('page_view')
      firebase.analytics().logEvent('screen_view', {
        app_name: this.isPWA() ? 'pwa' : 'web',
        screen_name: metaInfo.title,
        app_version: version
      })
    }
  },
  computed: {
    isIos () {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /iphone|ipad|ipod/.test(userAgent)
    },
    isInStandaloneMode () {
      return ('standalone' in window.navigator) && (window.navigator.standalone)
    }
  },
  methods: {
    isPWA () {
      return window && window.matchMedia('(display-mode: standalone)').matches
    },
    showIosInstall () {
      let iosPrompt = document.querySelector('.ios-prompt')
      if (!iosPrompt) return
      iosPrompt.style.display = 'block'
      iosPrompt.addEventListener('click', () => {
        iosPrompt.style.display = 'none'
      })
    }
  },
  mounted () {
    console.log(this.isIos, ', Second: ', this.isInStandaloneMode)
    if (this.isIos && !this.isInStandaloneMode) {
      this.showIosInstall()
    }
  }
}
</script>

<style>
.filter {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
