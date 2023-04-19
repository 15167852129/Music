import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const discover = () => import('../views/discover/Discovermusic.vue')
const playList = () => import('../views/playlist/PlayList.vue')

const recommend = () => import('../views/discover/childviews/Recommend.vue')
const play = () => import('../views/discover/childviews/Play.vue')
const list = () => import('../views/discover/childviews/List.vue')
const singer = () => import('../views/discover/childviews/Singer.vue')
const latestmusic = () => import('../views/discover/childviews/LatestMusic.vue')


const routes = [
    {
      path:'',
      redirect:'/discover'
    },
    {
      path:'/discover',
      component:discover,
      children:[
        {
          path:'',
          redirect:'recommend'
        },
        {
          path:'recommend',
          component:recommend
        },
        {
          path:'play',
          component:play
        },
        {
          path:'list',
          component:list
        },
        {
          path:'singer',
          component:singer
        },
        {
          path:'latestmusic',
          component:latestmusic
        },
      ]
    },
    //歌单详细页
    {
      path:'/playlist/:id',
      component:playList
    }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router