import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatView from '../views/ChatView.vue'
import { firebaseAuth } from '../firebase/config'


const requireAuth = (to, from, next) => {
  let user = firebaseAuth.currentUser
  if (!user) {
    next({ name: "Home" })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = firebaseAuth.currentUser
  if (user) {
    next({ name: "ChatView" })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatView',
    name: 'chatView',
    component: ChatView,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
