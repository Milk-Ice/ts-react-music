import { shallowEqualApp, useAppSelector } from '@/store'
import React, { ElementRef, memo, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import classNames from 'classnames'

interface IProps {
  chidren?: ReactNode
}
const TopBanner: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  // 点击上一个
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  // 点击下一个
  function handleNextClick() {
    bannerRef.current?.next()
  }
  // 切换面板的回调
  function HandleAfterCarouselChange(current: number) {
    setCurrentIndex(current)
  }
  /** 事件处理函数 */

  function HandleBeforeChange() {}
  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }
  // console.log(bgImageUrl)

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={10000}
            effect="fade"
            ref={bannerRef}
            afterChange={HandleAfterCarouselChange}
            beforeChange={HandleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
export default memo(TopBanner)
