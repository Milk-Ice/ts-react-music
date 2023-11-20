import { shallowEqualApp, useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const TopBanner: FC<IProps> = () => {
  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  return (
    <div className="banner wrap-v2">
      {banners.map((item) => {
        return (
          <div className="item" key={item.imageUrl}>
            {item.imageUrl}
          </div>
        )
      })}
    </div>
  )
}
export default memo(TopBanner)
