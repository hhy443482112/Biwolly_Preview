/* 北斗华南粉丝部专用 */

// 顶部导航
const T_Header = () => import('@/pages/triopen/header/t_header')

const TriopenIndex = () => import('@/pages/triopen/index')
const Triopen = () => import('@/pages/triopen/triopen')
/* 北斗华南粉丝部专用 */

const DocNav = () => import('@/pages/homePage/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Ingress = () => import('@/pages/ingress/ingress')
const Balabala = () => import('@/pages/balabala/index')

const routes = [
  {
    path: '/Ingress',
    name: 'Ingress',
    component: Ingress,
  },
  {
    path: '/Balabala',
    name: 'Balabala',
    component: Balabala,
  },
  {
    path: '/',
    name: '',
    component: T_Header,
    children: [
      {
        path: '/Fans',
        name: 'TriopenIndex',
        component: TriopenIndex,
      },
      {
        path: '/beidoudou',
        name: 'Triopen',
        component: Triopen,
      },
    ],
  },
  {
    path: '/',
    name: '',
    component: DocNav,
    children: [
      {
        path: '/Doc',
        name: 'Doc',
        component: Doc,
      },
    ],
  },
]

export default routes