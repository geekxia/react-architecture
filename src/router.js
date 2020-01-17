import TestJsx from '@/views/test/TestJsx'
import TestProps from '@/views/test/TestProps'
import TestLifecycle from '@/views/test/TestLifecycle'
import TestList from '@/views/test/TestList'
import TestForm from '@/views/test/TestForm'
import TestState from '@/views/test/TestState'
import TestCombine from '@/views/test/TestCombine'

const routes = [
  {
    id: 1,
    path: '/jsx',
    component: TestJsx,
    text: '测试JSX',
    icon: 'qq'
  },
  {
    id: 2,
    path: '/props',
    component: TestProps,
    text: '测试Props',
    icon: 'ie'
  },
  {
    id: 3,
    path: '/life',
    component: TestLifecycle,
    text: '生命周期',
    icon: 'apple'
  },
  {
    id: 4,
    path: '/list',
    component: TestList,
    text: '测试JSX',
    icon: 'github'
  },
  {
    id: 5,
    path: '/form',
    component: TestForm,
    text: '表单测试',
    icon: 'html5'
  },
  {
    id: 6,
    path: '/state',
    component: TestState,
    text: '状态提升',
    icon: 'google'
  },
  {
    id: 7,
    path: '/combine/:id',   // 动态的路由参数
    component: TestCombine,
    text: '组件复用',
    icon: 'sketch'
  }
]

export default routes
