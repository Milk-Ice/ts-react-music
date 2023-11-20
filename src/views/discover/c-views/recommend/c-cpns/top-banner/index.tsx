import { shallowEqualApp, useAppSelector } from '@/store'
import React, { ElementRef, memo, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

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
  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  // 获取背景照片
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
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
