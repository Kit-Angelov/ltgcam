import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'
import Catalog from '../components/Catalog'
import Basket from '../components/Basket'
import Delivery from '../components/Delivery'
import Contacts from '../components/Contacts'
import Map from '../components/Map'
import Maps from '../components/Maps'
import Instruction from '../components/Instruction'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Main',
        component: Main
      },  
      {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
      },
      {
        path: '/basket',
        name: 'Basket',
        component: Basket
      },
      {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
      },
      {
        path: '/instruction',
        name: 'Instruction',
        component: Instruction
      },
      {
        path: '/detail',
        name: 'Detail',
        component: Detail
      },
      {
        path: '/maps',
        name: 'Maps',
        component: Maps
      }
    ]
  })