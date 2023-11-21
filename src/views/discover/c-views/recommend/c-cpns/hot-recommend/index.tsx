import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RecommendWrapper } from '../../style'
import AreaHeaderV1 from '@/components/area-header-v1'
interface IProps {
  chidren?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <AreaHeaderV1 />
      hot-recommend
    </RecommendWrapper>
  )
}
export default memo(HotRecommend)
