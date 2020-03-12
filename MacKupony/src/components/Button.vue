<template>
  <div style="height:33vh" class="tw-absolute tw-top-0 tw-left-0 tw-w-screen tw-z-20 tw-overflow-hidden tw-flex tw-flex-col tw-justify-end tw-items-center">
    <button v-ripple @click="change(item)" class="tw-mb-4 tw-bg-green-900 tw-text-white tw-px-16 tw-py-2 tw-rounded-lg tw-shadow-lg">
      Zrealizuj kupon
    </button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    change (val) {
      return this.$store.commit('coupon/setCoupon', val)
    }
  }
}
</script>
