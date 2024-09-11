import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <div className={styles.title}>联系</div>
          <div className={styles.text}>问题反馈：xjh22222228@gmail.com</div>
          <div className={styles.text}>微信订阅：xjh22222228</div>
        </div>
        <div>
          <div className={styles.title}>关注我们</div>
          <div className={styles.text}>
            <a href="https://github.com/xjh22222228/nav" target="_blank">
              GitHub
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://gitee.com/xiejiahe/nav" target="_blank">
              Gitee
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
