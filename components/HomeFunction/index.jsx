import styles from './index.module.scss'

export default function HomeFunction() {
  const list = [
    {
      title: '平台选择',
      desc: '支持Github、Gitee',
      src: '/github.svg',
    },
    {
      title: '权限控制',
      desc: '分类、网站可配置仅自己可见',
      src: '/auth.svg',
    },
    {
      title: '书签导入',
      desc: '支持所有浏览器书签导入',
      src: '/chrome.svg',
    },
    {
      title: '书签导出',
      desc: '一键导出所有数据到浏览器书签',
      src: '/chrome.svg',
    },
    {
      title: '查询数据',
      desc: '直查标题、图标、描述，超便捷',
      src: '/search.svg',
    },
    {
      title: '部署平台',
      desc: '可选Fork、自有部署模式',
      src: '/tool.svg',
    },
    {
      title: '多种主题',
      desc: '多种主题、卡片风格设计',
      src: '/card.svg',
    },
    {
      title: '响应设计',
      desc: '强大的响应式系统设计',
      src: '/respon.svg',
    },
  ]

  return (
    <section className={styles.function}>
      <div className="font-bold text-black text-4xl mb-14 sm:text-5xl">
        强大的特性
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-10 sm:gap-y-16">
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
