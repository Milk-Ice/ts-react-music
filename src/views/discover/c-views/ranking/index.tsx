import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}
export default memo(Ranking)
