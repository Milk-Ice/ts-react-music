import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Recommand: FC<IProps> = () => {
  return <div>Recommand</div>
}
export default memo(Recommand)
