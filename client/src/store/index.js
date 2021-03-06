/**
 * Store
 * Created by 10613 on 2017/6/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: null, // 用户信息
  login: false // 是否登录
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
