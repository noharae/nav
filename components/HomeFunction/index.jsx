import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export default function HomeFunction() {
  const { t } = useTranslation()

  const list = [
    {
      title: t('platform'),
      desc: t('platformDesc'),
      src: '/github.svg',
    },
    {
      title: t('access'),
      desc: t('accessDesc'),
      src: '/auth.svg',
    },
    {
      title: t('importBook'),
      desc: t('importBookDesc'),
      src: '/chrome.svg',
    },
    {
      title: t('exportBook'),
      desc: t('exportBookDesc'),
      src: '/chrome.svg',
    },
    {
      title: t('queryData'),
      desc: t('queryDataDesc'),
      src: '/search.svg',
    },
    {
      title: t('deploymentPlatform'),
      desc: t('deploymentPlatformDesc'),
      src: '/tool.svg',
    },
    {
      title: t('theme'),
      desc: t('themeDesc'),
      src: '/card.svg',
    },
    {
      title: t('responsiveDesign'),
      desc: t('responsiveDesignDesc'),
      src: '/respon.svg',
    },
  ]

  return (
    <section className={styles.function}>
      <div className="font-bold text-black text-4xl mb-14 sm:text-5xl">
        {t('features')}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-y-16">
        {list.map((item) => (
          <div
            key={item.title}
            className="text-center flex flex-col items-center justify-start"
          >
            <img
              src={item.src}
              className="w-14 h-14 min-w-14 min-h-14"
              loading="lazy"
            />
            <div className="mt-4 text-2xl font-bold text-black">
              {item.title}
            </div>
            <div className="mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
