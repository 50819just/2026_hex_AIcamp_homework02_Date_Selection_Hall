import { navigateTo } from '../hooks/useRouter'
import { getServiceById } from '../data/services'
import MaskedHeading from '../components/ui/MaskedHeading'

const DECORATIVE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCbZjDrTna0SpwT7IpYJF4WAjWGmIWxRnVW-jSu4ABLArjjL5dnx-zi-c4e36YV-nD-lluVP742R2AzQrh-tLONnKBa6H7X79om9fTkwPBSW_7zznlgZspwgyBjX__mEZ3sqy-f--96YX_hXROhi4cH71ocxUOzfnIwg9TGbLvw1WxoHM3YARG9MOJOVP06NjZezebpx-f6Q4gLCktfC7A1XUi_HIUjP_MS7PghrNW5T_QyBHFPB-ltdA'

const PROCESS_STEPS = [
  { label: '一', title: '提出需求', description: '填寫初步需求' },
  { label: '二', title: '補充資料', description: '提供所需相關資料' },
  { label: '三', title: '老師確認是否可承接', description: '人工審視需求與資料' },
  { label: '四', title: '確認費用與安排', description: '報價與後續規劃' },
  { label: '五', title: '完成服務', description: '實際服務內容依約定' },
]

const SERVICE_FAQ = [
  { q: '如何進行預約申請？', a: '點擊下方按鈕，填寫初步需求表單送出即可。' },
  { q: '我不確定資料是否完整，可以先申請嗎？', a: '可以，先提供基本聯絡資訊與需求，後續可再補充資料。' },
  { q: '實際費用何時說明？', a: '老師確認是否可承接後，會一併說明確認的費用與安排。' },
  { q: '我需要親自到場嗎？', a: '視需求而定，將於確認案件階段與您討論合適的方式。' },
]

function ServiceDetailPage({ serviceId }) {
  const service = getServiceById(serviceId)

  if (!service) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-24 text-center">
        <h1 className="text-style-headline-lg text-ink mb-6">找不到這項服務</h1>
        <p className="text-style-body-md text-tea-brown mb-8">這個服務項目可能已調整，請回到首頁重新選擇。</p>
        <a
          className="inline-block bg-vermilion text-on-primary px-8 py-3 rounded-[2px] text-style-title-lg"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/')
          }}
        >
          回到首頁
        </a>
      </div>
    )
  }

  const { detail } = service

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] pb-16 md:pb-[120px]">
      <div className="mb-8 text-style-body-md text-tea-brown">
        <a
          className="hover:text-vermilion"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/')
          }}
        >
          服務介紹
        </a>{' '}
        <span className="mx-2">/</span> <span className="text-ink">{service.title}</span>
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center text-center mt-4 md:mt-12 mb-16 md:mb-[120px]">
        <MaskedHeading className="text-style-headline-lg text-ink mb-6">{service.title}</MaskedHeading>
        <p className="text-style-body-lg text-tea-brown max-w-2xl mb-6" data-aos="fade-up" data-aos-delay="80">
          {detail.heroSummary}
        </p>
        <div
          className="inline-flex items-center gap-2 bg-surface-container py-2 px-4 rounded-[999px] border border-tea-brown/20 text-tea-brown mb-10"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          <span className="material-symbols-outlined text-[18px]">payments</span>
          <span className="text-style-body-md">{detail.priceBadge}</span>
        </div>
        <div
          className="w-full h-[200px] md:h-[320px] border border-ink/10 relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${DECORATIVE_IMAGE}')` }}
          aria-hidden="true"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-paper to-transparent opacity-40" />
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 my-16 md:my-[120px]" />

      {/* Process */}
      <section className="mb-16 md:mb-[120px]">
        <h2 className="text-style-headline-md text-ink text-center mb-16">申請流程</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const isLast = index === PROCESS_STEPS.length - 1
            return (
              <div
                className="flex flex-col items-center text-center relative group"
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div
                  className={`w-16 h-16 rounded-full border flex items-center justify-center mb-4 bg-surface transition-colors ${
                    isLast ? 'border-vermilion/30 group-hover:border-vermilion' : 'border-tea-brown/20 group-hover:border-vermilion/50'
                  }`}
                >
                  <span className={`text-style-title-lg ${isLast ? 'text-vermilion' : 'text-ink'}`}>{step.label}</span>
                </div>
                <h3 className={`text-style-title-lg mb-2 ${isLast ? 'text-vermilion' : 'text-ink'}`}>{step.title}</h3>
                <p className="text-style-body-md text-tea-brown">{step.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 my-16 md:my-[120px]" />

      {/* Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-[120px]">
        <div className="bg-paper p-8 md:p-12 border border-tea-brown/20" data-aos="fade-right">
          <h3 className="text-style-headline-md text-ink mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-tea-brown">description</span>
            準備資料
          </h3>
          <div className="mb-8">
            <h4 className="text-style-title-lg text-ink mb-4">需要先準備</h4>
            <ul className="space-y-4">
              {detail.prepared.map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="w-1.5 h-1.5 bg-tea-brown rounded-full mt-2 shrink-0" />
                  <span className="text-style-body-md text-tea-brown">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-style-title-lg text-ink mb-4">補充資料（可後續補充）</h4>
            <ul className="space-y-4">
              {detail.supplemental.map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="w-1.5 h-1.5 bg-tea-brown rounded-full mt-2 shrink-0" />
                  <span className="text-style-body-md text-tea-brown">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-paper p-8 md:p-12 border border-tea-brown/20" data-aos="fade-left">
          <h3 className="text-style-headline-md text-ink mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-tea-brown">inventory_2</span>
            服務內容與適合情境
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-style-title-lg text-ink border-b border-ink/10 pb-2 mb-3">實際服務內容</h4>
              <p className="text-style-body-md text-tea-brown">{detail.deliverable}</p>
            </div>
            <div>
              <h4 className="text-style-title-lg text-ink border-b border-ink/10 pb-2 mb-3">適合情境</h4>
              <ul className="space-y-2 text-style-body-md text-tea-brown list-disc list-inside">
                {detail.fitScenarios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 md:mb-[120px] max-w-3xl mx-auto">
        <h2 className="text-style-headline-md text-ink text-center mb-10">常見問題</h2>
        <div className="space-y-6">
          {SERVICE_FAQ.map((item, index) => (
            <div
              className="border-b border-tea-brown/20 pb-4"
              key={item.q}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h3 className="text-style-title-lg text-ink mb-2">{item.q}</h3>
              <p className="text-style-body-md text-tea-brown">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center mb-4" data-aos="zoom-in">
        <a
          className="bg-vermilion text-on-primary px-12 py-4 rounded-[2px] border border-vermilion hover:bg-transparent hover:text-vermilion transition-colors duration-300 text-style-title-lg flex items-center gap-2"
          href={`/booking?service=${service.id}`}
          onClick={(event) => {
            event.preventDefault()
            navigateTo(`/booking?service=${service.id}`)
          }}
        >
          {detail.ctaLabel}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </section>
    </div>
  )
}

export default ServiceDetailPage
