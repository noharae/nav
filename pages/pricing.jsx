import styles from './pricing.module.scss'

export default function Home() {
  const list = [
    {
      title: '免费版',
      desc: '满足日常业务使用',
      price: 0,
      style: {
        background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      },
      items: ['几乎所有常用功能', '查询次数300次/月'],
    },
    {
      title: '订阅版',
      desc: '尝鲜一下',
      price: 99,
      style: {
        background:
          'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      },
      unit: '/年',
      items: [
        '用户收录提交/通知',
        '导出到浏览器书签',
        '一个全站域名/支持更改',
        '查询次数不限',
      ],
    },
    {
      title: '永久版',
      desc: '在各种场景下都能随心所欲',
      price: 299,
      subtitle: '强烈推荐',
      style: {
        background: 'black',
      },
      items: [
        '自有部署',
        '导出到浏览器书签',
        '用户收录提交/通知',
        '没有域名限制',
        '查询次数不限',
        '商业用途',
        '一对一技术支持',
      ],
    },
  ]

  return (
    <div className={styles.pricing}>
      <div className="text-center font-bold text-4xl sm:text-5xl pt-16">
        选择适合的版本
      </div>
      <div className="text-center font-bold text-base pt-5 text-slate-600">
        发送到：xjh22222228@gmail.com
        （备注支付凭证，我们会在24小时内发送授权码回复您）
      </div>

      <div className={styles.pricingBox}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => (
            <div
              key={item.title}
              className="bg-white text-center rounded-xl shadow-lg overflow-hidden pb-7"
            >
              <div className="h-4 sm:h-7">
                <div className="p-1 text-orange-100 text-sm" style={item.style}>
                  {item.subtitle}
                </div>
              </div>
              <div className="font-bold text-3xl mt-8">{item.title}</div>
              <div className="text-sm mt-3 text-slate-900">{item.desc}</div>
              <div className="font-bold text-3xl mt-5 mb-5">
                ￥{item.price}
                {item.unit && (
                  <span className="text-base ml-1">{item.unit}</span>
                )}
              </div>
              {item.items.map((text) => (
                <div key={text} className="flex justify-center px-8">
                  <div className="flex w-48 justify-start items-center mt-1.5">
                    <img src="/ok.svg" className="w-4 mr-2" />
                    {text}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <img
            src="https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/img/32.png"
            width="600"
          />
        </div>
      </div>
    </div>
  )
}
