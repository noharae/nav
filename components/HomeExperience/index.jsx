import styles from './index.module.scss'
import classNames from 'classnames'

export default function HomeExperience() {
  return (
    <section className={styles.homeExperience}>
      <div className="text-4xl font-bold text-white sm:text-5xl">
        轻松部署 简单易用
      </div>
      <div
        className={classNames(styles.desc, 'font-medium text-lg sm:text-xl')}
      >
        强大、免费、简单、易用、轻量级、一键部署、降低成本
      </div>
      <div>
        <a className={styles.button} href="https://nav3.cn" target="_blank">
          立即体验
        </a>
      </div>
    </section>
  )
}
