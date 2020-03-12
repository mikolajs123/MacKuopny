<template>
  <div :class="coupon != '' ? 'tw-top-0' : 'tw-top-1'" class="t overflow-scroll tw-bg-white tw-fixed tw-left-0 tw-right-0 tw-h-screen tw-z-50 tw-p-2" @click="back()">
    <!-- Navigation -->
    <div class="tw-h-12 tw-w-full tw-flex tw-justify-center tw-items-center">
      <q-icon name="arrow_back" class="tw-text-xl tw-text-gray-700 tw-flex-1"></q-icon>
      <!-- Separator -->
      <div class="tw-flex-3" />
      <q-icon name="archive" class="tw-text-xl tw-text-gray-700 tw-flex-1"></q-icon>
      <q-icon name="delete_outline" class="tw-text-xl tw-text-gray-700 tw-flex-1"></q-icon>
      <q-icon name="mail_outline" class="tw-text-xl tw-text-gray-700 tw-flex-1"></q-icon>
      <q-icon name="more_vert" class="tw-text-xl tw-text-gray-700 tw-flex-1"></q-icon>
    </div>
    <!-- Voucher -->
    <div class="tw-flex tw-h-16 tw-justify-center tw-items-center">
      <h1 class="tw-ml-2 tw-text-lg tw-text-gray-800 tw-flex-1">
        Voucher
      </h1>
      <q-icon class="tw-text-yellow-500 tw-text-xl tw-flex-1" name="label_important" />
      <button style="background-color:#f0efed;font-size:10px" class="tw-px-2 tw-rounded">
        Odebrane
      </button>
      <!-- Spacer -->
      <div class="tw-flex-4" />
      <q-icon style="color:#9c9c9c" class="tw-text-xl tw-flex-1" name="star_border" />
    </div>
    <!-- Mc Donald's -->
    <div class="tw-px-2 tw-mt-2 tw-flex tw-justify-center tw-items-center">
      <div style="background:#db5903" class="tw-rounded-full tw-text-2xl tw-text-white tw-h-8 tw-w-8 tw-flex tw-justify-center tw-items-center">
        M
      </div>
      <div class="tw-ml-3 tw-flex tw-flex-col tw-justify-center tw-items-start">
        <button style="font-size:13px" class="tw-font-medium tw-flex tw-justify-center tw-items-center">
          McDonalds Poland <small style="color:#8a8a8a;margin-left:5px">{{ new Date() | moment("subtract", "3 days", 'MMM DD') }}</small>
        </button>
        <button style="color:#6b6b6b;font-size:11px" class="tw-flex tw-justify-center tw-items-center">
          do mnie
          <q-icon class="tw-ml-1" name="keyboard_arrow_down"></q-icon>
        </button>
      </div>
      <!-- Spacer -->
      <div class="tw-flex-4" />
      <q-icon class="tw-text-gray-700 tw-text-xl tw-flex-3" name="subdirectory_arrow_left" />
      <q-icon class="tw-text-gray-700 tw-text-xl tw-flex-1" name="more_vert" />
    </div>
    <!-- Message -->
    <div class="tw-pt-8 tw-px-3">
      <p style="font-size:12px" class="tw-mb-1 tw-font-normal">Dzień dobry,</p>
      <p style="font-size:12px" class="tw-mb-2">Przesyłamy kupon McDonald's w podziękowaniu za wzięcie udziału w ankiecie.</p>
      <p style="font-size:11px" class="tw-mb-1"><b>DATA WYDANIA:</b> <small style="font-size:11px" class="tw-ml-2">{{ new Date() | moment('subtract', '1 days', 'DD/MM/YYYY') }}</small></p>
      <p style="font-size:11px" class=""><b>UNIKALNY KOD:</b> <small class="tw-ml-2" style="font-size:11px">{{ getCode() }}</small></p>
    </div>
    <!-- Image -->
    <div class="tw-mt-4 tw-px-2">
      <img :src="getImgUrl()" alt="">
    </div>
    <!-- footer -->
    <div style="font-size:8px" class="tw-pt-4 tw-px-2">
      Kupon ten upoważnia do jednokrotnego odbioru produktu gratis przy dowolnym zakupie z oferty klasycznej.
      Kupon ważny jest przez 7 dni od czasu jego wygenerowania i może być zrealizowany w dowolnej restauracji McDonald's w Polsce
      z wyłączeniem restauracji znajdujących się na terenie Portu Lotniczego im. Fryderyka Chopina w Warszawie oraz Portu Lotniczego im. Lecha Wałęsy w Gdańsku.
      Szczegółowy regulamin ankiety "Opinia Gości" znajduje się na stronie<span class="tw-text-blue-400">www.mcdonalds.pl</span> w sekcji <span class="tw-text-blue-400">Regulaminy</span>
    </div>
    <p style="font-size:11px" class="tw-px-2 tw-mt-4">Dziękujemy za wzięcie udział w badaniu!</p>
    <!-- Respond -->
    <div class="tw-flex tw-mt-20">
      <div style="border:solid 2px #e8e8e8;border-radius:5px;color:#525151" class="tw-flex-1 tw-p-2 tw-flex tw-justify-center tw-items-center tw-m-1">
        <q-icon class="tw-text-xl tw-mr-1" name="subdirectory_arrow_left"></q-icon> Odpowiedz
      </div>
      <div style="border:solid 2px #e8e8e8;border-radius:5px;color:#525151" class="tw-flex-1 tw-p-2 tw-flex tw-justify-center tw-items-center tw-m-1">
        <q-icon class="tw-text-xl tw-mr-1" name="subdirectory_arrow_right"></q-icon> Przekaż dalej
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    coupon () {
      return this.$store.getters['coupon/coupon']
    }
  },
  methods: {
    back () {
      this.$store.commit('coupon/setCoupon', '')
    },
    getImgUrl () { // ../assets/coupon/fries.png
      // eslint-disable-next-line eqeqeq
      if (this.coupon == 'Cheeseburger') {
        return require('assets/coupon/cheese.jpg')
      // eslint-disable-next-line eqeqeq
      } else if (this.coupon == 'Frytki') {
        return require('assets/coupon/frytki.png')
      // eslint-disable-next-line eqeqeq
      } else if (this.coupon == 'Lody') {
        return require('assets/coupon/ice.png')
      } else {
        return require('assets/coupon/cheese.jpg')
      }
    },
    getCode () {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      let word = [], finalWord
      for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * letters.length)
        if (i % 2 === 0) {
          word.push(letters[x] + '-')
        } else {
          word.push(numbers[x])
        }
      }
      finalWord = word.join('')
      return finalWord
    }
  }
}
</script>

<style>
.t {
  transition: .6s;
}
</style>
