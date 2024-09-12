import styles from './index.module.scss'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function HomeExperience() {
  const { t } = useTranslation()

  return (
    <section className={styles.homeExperience}>
      <div className="text-4xl font-bold text-white sm:text-5xl">
        {t('easy')}
      </div>
      <div
        className={classNames(styles.desc, 'font-medium text-lg sm:text-xl')}
      >
        {t('newNavDesc')}
      </div>
      <div>
        <a className={styles.button} href="https://nav3.cn" target="_blank">
          {t('experience')}
        </a>
      </div>
    </section>
  )
}
