import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDU3HF0aKZ-0vaA1Fbo2fB_YTkLdH9pssE',
  authDomain: 'nuxt-news-app-ef90e.firebaseapp.com',
  databaseURL: 'https://nuxt-news-app-ef90e.firebaseio.com',
  projectId: 'nuxt-news-app-ef90e',
  storageBucket: 'nuxt-news-app-ef90e.appspot.com',
  messagingSenderId: '864710728678',
  appId: '1:864710728678:web:db159a558f1c58f2',
  measurementId: 'G-PHKENMX2SE'
}

const app = firebase.initializeApp(firebaseConfig)
const analytics = app.analytics()

Vue.prototype.$analytics = firebase.analytics()

this.$analytics.logEvent('notification_received')

export { firebase, analytics }
