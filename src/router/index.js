import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/vHome'
import Recommend from '@/views/home/children/vRecommend'
import HotSongsList from '@/views/home/children/vHotSongsList'
import Search from '@/views/home/children/vSearch'
import Suggess from '@/views/home/children/vSuggess'
import SongsList from '@/views/songslist/vSongsList'

import Play from '@/views/playpage/vPlay'
import DownApp from '@/views/downloadapp/vDownApp'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, children: [
        {path: '', redirect: 'recommend'},
        {path: 'recommend',component: Recommend},
        {path: 'hotsongslist',component: HotSongsList},
        {path: 'search',component: Search,children: [
            {path: 'suggess/:suggess',name: 'suggess',component: Suggess,props: true,}
          ]
        }
      ]
    },
    {path: '/plays/:playId',name: 'play',component: Play,},
    {path: '/applink/download',name: 'appdownload',component: DownApp},
    {path: '/songslist',component: SongsList}
  ]
})
