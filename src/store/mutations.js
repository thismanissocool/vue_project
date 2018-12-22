
/*
 vuex的mutations模块
 直接修改状态数据,actions通知mutation改变状态数据一般以{}传递
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}){
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state, {categorys}){
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state, {shops}){
    state.shops = shops;
  }
}

