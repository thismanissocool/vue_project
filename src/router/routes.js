/**
 * Created by Administrator on 2018/12/21.
 */
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'


export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
