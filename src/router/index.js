import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'
import Catalog from '../components/Catalog'
import Basket from '../components/Basket'
import Delivery from '../components/Delivery'
import Contacts from '../components/Contacts'
import Map from '../components/Map'
import Instruction from '../components/Instruction'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/catalog/:mark',
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
        path: '/contacts/:part',
        name: 'Contacts',
        component: Contacts
      },
      {
        path: '/instruction',
        name: 'Instruction',
        component: Instruction
      },
      {
        path: '/catalog/:mark/:id',
        name: 'Detail',
        component: Catalog
      },
      {
        path: '/',
        name: 'Main',
        component: Main
      }, 
    ]
  })