<template>
  <q-page class="tw-bg-black">
    <div :class="coupon ? 'rotate' : ''" class="t tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, i) in items" :key="i">
          <div class="tw-bg-gray-100 tw-relative tw-h-screen tw-w-screen tw-flex tw-justify-center tw-items-center">
            <Bg />
            <Title :item="item" />
            <Button :item="item.name" />
            <Content />
          </div>
        </swiper-slide>
      </swiper>
      <Support />
    </div>
    <transition name="slide">
      <Coupon v-ripple v-if="coupon != ''" />
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'Mac Kupony',
  metaInfo () {
    return {
      title: 'Mac Kupony'
    }
  },
  components: {
    'Bg': require('components/Bg.vue').default,
    'Title': require('components/Title.vue').default,
    'Button': require('components/Button.vue').default,
    'Content': require('components/Content.vue').default,
    'Support': require('components/Support.vue').default,
    'Coupon': require('components/Coupon.vue').default
  },
  data: () => ({
    items: [
      { src: 'cheeseburger.png', name: 'Cheeseburger' },
      { src: 'fries.png', name: 'Frytki' },
      { src: 'icecream.png', name: 'Lody' },
      { src: 'cheeseburger.png', name: 'Hamburger' }
    ],
    swiperOption: {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    }
  }),
  computed: {
    coupon () {
      return this.$store.getters['coupon/coupon']
    }
  }
}
</script>

<style>
.rotate {
  transform: perspective(4cm) rotateX(5deg) rotateY(0deg) translateZ(-70px);
}
.t {
  transition: .6s;
}
.slide-enter-active {
  animation: slide-in .6s;
}
.slide-leave-active {
  animation: slide-in .6s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0vh);
  }
}
</style>
