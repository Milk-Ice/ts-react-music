import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitle from '@/assets/data/header_titles.json'
interface IProps {
  chidren?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.path}>{item.title}</Link>
    }
    if (item.type === 'link') {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitle.map((item) => {
              return showItem(item)
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
    </HeaderWrapper>
  )
}
export default memo(AppHeader)
