import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Discover: FC<IProps> = () => {
  return <div>discover</div>
}
export default memo(Discover)
