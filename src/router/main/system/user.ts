const user = () => import('@/views/system/user/index.vue')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
