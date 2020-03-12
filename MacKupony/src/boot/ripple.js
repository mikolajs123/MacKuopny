import Vue from 'vue'
import Ripple from 'vue-ripple-directive'
Ripple.color = 'rgba(255, 190, 0, 0.35)'
Ripple.zIndex = 55
Vue.directive('ripple', Ripple)
