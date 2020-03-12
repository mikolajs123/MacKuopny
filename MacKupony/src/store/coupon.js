export const state = () => ({
  coupon: ''
})

export const mutations = {
  setCoupon (state, val) {
    state.coupon = val
    console.log(state.coupon)
  }
}

export const actions = {

}

export const getters = {
  coupon: state => state.coupon
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
