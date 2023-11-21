import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'
interface IProps {
  chidren?: ReactNode
}
const AreaHeaderV1: FC<IProps> = () => {
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <span className="title">热门推荐</span>
        <div className="keywords">
          {['华语', '流行', '摇滚', '民谣', '电子'].map((item, index) => {
            return (
              <div className="item" key={index}>
                {item}
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to="">
          更多
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}
export default memo(AreaHeaderV1)
