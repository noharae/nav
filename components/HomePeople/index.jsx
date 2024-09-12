import styles from './index.module.scss'
import classNames from 'classnames'

export default function HomeFunction() {
  const list = [1, 2, 3, 4, 5, 6]

  return (
    <section className={styles.people}>
      <div className="font-bold text-black text-4xl mb-5 sm:text-5xl">
        他们正在使用发现导航
      </div>
      <div className="mb-12 text-lg text-gray-400">分享、价值、发现</div>

      <div className={styles.mask}>
        {list.map((item, idx) => (
          <div className={classNames(styles.items, 'flex mt-6')}>
            <img
              src={`https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/fork${
                idx + 1
              }.png`}
              className="w-full"
            />
            <img
              src={`https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/fork${
                idx + 1
              }.png`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
