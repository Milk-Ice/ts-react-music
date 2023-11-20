import React, { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'
interface IProps {
  chidren?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(Discover)
