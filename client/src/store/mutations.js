/**
 * mutations
 * Created by 10613 on 2017/6/14.
 */
import {
  RECODE_USERINFO
} from './mutation-types'

export default {
  // 记录用户信息
  [RECODE_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
  }
}
