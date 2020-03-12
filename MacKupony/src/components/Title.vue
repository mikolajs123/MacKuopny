<template>
  <div style="height:33vh" class="tw-absolute tw-z-10 tw-flex tw-flex-col tw-justify-center tw-items-center tw-top-0 tw-left-0 tw-w-screen tw-overflow-hidden">
    <h1 class="absolute tw-left-1/20 tw-text-5xl tw-text-gray-700 tw-z-20">
      {{ item.name }}<span class="tw-text-green-800 tw-text-5xl">.</span>
    </h1>
    <img :src="getImgUrl(item.src)" class="tw-w-screen tw-absolute tw-bottom-1/10- tw-right-1/2- tw-z-10" :alt="item.name">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['item'],
  methods: {
    getImgUrl (pic) {
      return require(`assets/choose/${pic}`)
    }
  }
}
</script>
