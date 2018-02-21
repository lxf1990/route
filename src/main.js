// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import about from './components/about.vue'
import home from './components/home.vue'
import message from './components/message.vue'
import news from './components/news.vue'
import messageDetail from './components/messageDetail.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */


const router = new VueRouter({
  linkActiveClass:'active',
  mode:'history',
  routes:[
    {path:'/',component:home},
    {path:'/home',component:home},
    {
      path:'/about',
      component:about,
      children:[
        {path:'news',component:news},
        {
          path:'message',
          component:message,
          children:[
            {
              path:'mdetail/:id',
              component:messageDetail
            }
          ]
        }
      ]
    }
  ]
})


new Vue({
  el: '#app',
  render:h => h(App),
  router,

})
