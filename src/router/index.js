import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import RelateVideo from '../components/RelateVideo.vue'
import Comment from '../components/Comment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/detail/:vid',
      name: 'detail',
      redirect:'/detail/:vid/index',
    	component: Detail,
      children:[
        {
          path: '/detail/:vid/index',
          name:'relate-video',
          component: RelateVideo,
        },
        {
          path: '/detail/:vid/comment',
          name:'comment',
          component: Comment,
        },
      ]

    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
