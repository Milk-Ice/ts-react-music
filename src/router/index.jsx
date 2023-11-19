import React from 'react'
import Discover from '@/views/discover'
// eslint-disable-next-line prettier/prettier
import type  { RouteObject } from 'react-router-dom'
const routes:RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />

}
]
export default routes
