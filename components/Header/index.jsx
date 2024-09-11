import { useRouter } from 'next/router'
import styles from './index.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerBox}>
        <div className={styles.titleBox} onClick={() => router.push('/')}>
          <img src="/logo.svg" className={styles.logo} />
          <span className={styles.title}>发现导航</span>
        </div>

        <div className={styles.items} onClick={() => router.push('/pricing')}>
          价格
        </div>
      </div>
    </header>
  )
}
