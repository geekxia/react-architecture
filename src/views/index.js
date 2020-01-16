import TestJsx from '@/views/test/TestJsx'
import TestProps from '@/views/test/TestProps'
import TestLifecycle from '@/views/test/TestLifecycle'
import TestList from '@/views/test/TestList'
import TestForm from '@/views/test/TestForm'
import TestState from '@/views/test/TestState'
import TestCombine from '@/views/test/TestCombine'

const router = [
  {
    id: 1,
    path: '/jsx',
    component: TestJsx,
    text: '测试JSX'
  },
  {
    id: 2,
    path: '/props',
    component: TestProps,
    text: '测试Props'
  },
  {
    id: 3,
    path: '/life',
    component: TestLifecycle,
    text: '生命周期'
  },
  {
    id: 4,
    path: '/list',
    component: TestList,
    text: '列表渲染'
  },
  {
    id: 5,
    path: '/form',
    component: TestForm,
    text: '受控表单'
  },
  {
    id: 6,
    path: '/state',
    component: TestState,
    text: '状态提升'
  },
  {
    id: 7,
    path: '/combine',
    component: TestCombine,
    text: '组合复用'
  }
]

export default router
