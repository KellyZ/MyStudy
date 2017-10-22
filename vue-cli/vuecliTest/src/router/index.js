import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/params',
      name:'Params',
      component:Params
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
    }
  ]
})
