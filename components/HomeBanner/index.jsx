import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import classNames from 'classnames'

export default function HomeBanner() {
  const list = [
    {
      title: '新一代导航网站',
      description: '强大、免费、简单、易用、轻量级、一键部署、降低成本',
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/4.png',
    },
    {
      title: '脱离传统概念',
      description: '没有数据库、没有服务端、几乎零成本',
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/1.png',
    },
    {
      title: '开箱即用',
      description: '支持所有浏览器书签导入',
      src: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/6.png',
    },
  ]

  function go() {
    window.open('https://github.com/xjh22222228/nav')
  }

  return (
    <section className={styles.homeBanner}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="font-bold text-4xl sm:text-5xl sm:leading-none	">
              {item.title}
            </div>
            <div
              className={classNames(
                styles.description,
                'font-medium text-lg sm:text-xl'
              )}
            >
              {item.description}
            </div>
            <div className="flex justify-center mb-8">
              <div className={styles.btn} onClick={go}>
                免费部署
                <img src="/arrow-r.svg" className={styles.arrow} />
              </div>
            </div>
            <div className={styles.imgBox}>
              <img className={styles.image} src={item.src} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
