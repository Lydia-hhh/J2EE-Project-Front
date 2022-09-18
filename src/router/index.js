import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/user',
    name: 'UserLayout',
    component:() => import('@/UserLayout'),
    redirect: '/user/send',
    children:[
      {
        path:'send',
        name:'MailForm',
        component:() => import('@/components/MailForm'),

      },
      {
        path: 'sendSearch',
        name:'SendSearch',
        component: () => import('@/components/SendSearch')
      },
      {
        path: 'recSearch',
        name:'RecSearch',
        component: () => import('@/components/RecSearch')
      },
      {
        path: 'locationInfo',
        name:'LocationInfo',
        component: () => import('@/components/LocationInfo'),
      },
      {
        path:'userPerson',
        name:'UserPerson',
        component:() => import('@/components/UserPerson'),
      }

    ]
  },
  {
    path: '/login/:id',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '/post',
    name: 'PostLayout',
    redirect: '/post/postUnfinished',
    component: () => import('@/PostLayout'),
    children: [
      {
        path: 'postUnfinished',
        name: 'PostUnfinished',
        component:() => import('@/components/PostUnfinished'),
      },
      {
        path: 'postFinished',
        name: 'PostFinished',
        component:() => import('@/components/PostFinished'),
      },
      {
        path: 'postPerson',
        name: 'PostPerson',
        component:() => import('@/components/PostPerson')
      }
    ]
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('@/AdminLayout'),
    redirect: '/admin/userInfo',
    children: [
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import('@/components/UserInfo'),
      },
      {
        path: 'postmanInfo',
        name: 'PostmanInfo',
        component: () => import('@/components/PostmanInfo'),
      },
      {
        path: 'unallocated',
        name: 'Unallocated',
        component:() => import('@/components/Unallocated'),
      },
      {
        path: 'allocated',
        name:'Allocated',
        component:() => import('@/components/Allocated'),
      },
      {
        path:'adminPerson',
        name: 'AdminPerson',
        component:() => import('@/components/AdminPerson')
      }

    ]
  },
  {
    path: '/',
    name:'HomeLayout',
    component: () => import('@/HomeLayout')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
