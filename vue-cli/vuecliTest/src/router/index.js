import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      beforeEnter:function (to,from,next) {
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path:'/home',
      name:'Home',
      redirect:'/'
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      name:'Params',
      component:Params,
      alias:'/aliasTest/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      name:'GoParams',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi',
      name: 'Hi',
      component:Hi,
      children:[
        {
          path:'/hi/hi1',
          name:'Hi1',
          components:{
            default:Hi1,
            left:Hi1,
            right:Hi2
          }
        },
        {
          path:'/hi/hi2',
          name:'Hi2',
          components:{
            default:Hi2,
            left:Hi2,
            right:Hi1
          }
        }
      ]
    },
    {
      path:'*',
      component:Error
    }
  ]
})
