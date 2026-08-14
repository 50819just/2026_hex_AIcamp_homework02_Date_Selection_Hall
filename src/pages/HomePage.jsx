import { navigateTo } from '../hooks/useRouter'
import { services } from '../data/services'
import { brand, trustPrinciples, workflow, faq } from '../data/siteContent'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCbZjDrTna0SpwT7IpYJF4WAjWGmIWxRnVW-jSu4ABLArjjL5dnx-zi-c4e36YV-nD-lluVP742R2AzQrh-tLONnKBa6H7X79om9fTkwPBSW_7zznlgZspwgyBjX__mEZ3sqy-f--96YX_hXROhi4cH71ocxUOzfnIwg9TGbLvw1WxoHM3YARG9MOJOVP06NjZezebpx-f6Q4gLCktfC7A1XUi_HIUjP_MS7PghrNW5T_QyBHFPB-ltdA'

function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
      {/* Hero */}
      <section className="py-16 md:py-[120px] flex flex-col items-center text-center">
        <span className="text-style-label-sm text-vermilion tracking-widest mb-4">{brand.eyebrow}</span>
        <h1 className="text-style-headline-lg text-ink mb-6 max-w-3xl">{brand.headline}</h1>
        <p className="text-style-body-lg text-tea-brown max-w-2xl mb-8">
          {brand.description}
          <br />
          <br />
          <span className="text-vermilion font-medium">※ {brand.highlightNote}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            className="inline-block bg-vermilion text-on-primary px-8 py-3 rounded-[2px] text-style-title-lg hover:bg-primary transition-colors text-center"
            href="/booking"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/booking')
            }}
          >
            {brand.primaryCta}
          </a>
          <button
            type="button"
            className="border border-tea-brown text-tea-brown px-8 py-3 rounded-[2px] text-style-title-lg hover:bg-tea-brown hover:text-on-primary transition-colors"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {brand.secondaryCta}
          </button>
        </div>
        <div
          className="mt-12 w-full h-[240px] md:h-[400px] border border-ink/10 relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-paper to-transparent opacity-50" />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-[120px] border-t border-ink/10" id="services">
        <div className="mb-16">
          <h2 className="text-style-headline-md text-ink">服務項目</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-tea-brown/20 bg-surface p-8 group hover:border-tea-brown/50 transition-colors flex flex-col"
            >
              <h3 className="text-style-title-lg text-ink mb-4 pb-4 border-b border-ink/10">{service.title}</h3>
              <p className="text-style-body-md text-tea-brown grow mb-6">{service.summary}</p>
              <p className="text-style-label-sm text-tea-brown/70 mb-4">{service.note}</p>
              <a
                className="text-vermilion text-style-title-lg flex items-center gap-2 group-hover:gap-4 transition-all"
                href={`/services/${service.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(`/services/${service.id}`)
                }}
              >
                了解服務 <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Principles */}
      <section className="py-16 md:py-[120px] border-t border-ink/10">
        <h2 className="text-style-headline-md text-ink mb-12 text-center">服務原則</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPrinciples.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-vermilion text-4xl">{item.icon}</span>
              <h4 className="text-style-title-lg text-ink">{item.title}</h4>
              <p className="text-style-label-sm text-tea-brown">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-[120px] border-t border-ink/10 bg-surface-container-low px-6 md:px-8 rounded-[8px] my-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-style-headline-md text-ink mb-4 text-center">預約流程</h2>
          <p className="text-center text-style-body-md text-tea-brown mb-12">
            ※ 送出的是預約申請，需經確認後才正式成立。
          </p>
          <ol className="relative border-l border-tea-brown/30 ml-3 space-y-12">
            {workflow.map((item, index) => (
              <li className="pl-10 relative" key={item.step}>
                <div
                  className={`absolute w-3 h-3 -left-[6.5px] top-1.5 ${
                    index === workflow.length - 1 ? 'bg-vermilion rounded-[2px]' : 'bg-tea-brown rounded-full'
                  }`}
                />
                <h4
                  className={`text-style-title-lg ${
                    index === workflow.length - 1 ? 'text-vermilion' : 'text-ink'
                  }`}
                >
                  {item.step}. {item.title}
                </h4>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Price */}
      <section className="py-16 md:py-[120px] border-t border-ink/10 text-center">
        <h2 className="text-style-headline-md text-ink mb-10">費用說明</h2>
        <div className="inline-block border border-tea-brown/20 bg-surface px-6 md:px-12 py-8 text-left w-full md:min-w-[400px] md:w-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex justify-between items-center gap-4 ${
                index < services.length - 1 ? 'border-b border-ink/10 pb-4 mb-4' : 'pb-2'
              }`}
            >
              <span className="text-style-title-lg text-ink">{service.title}</span>
              <span className="text-style-body-lg text-tea-brown whitespace-nowrap">{service.pricingLabel}</span>
            </div>
          ))}
          <p className="text-style-label-sm text-tea-brown mt-6 text-right">* MVP 參考資訊，非正式固定價目</p>
        </div>
        <p className="text-style-body-md text-tea-brown mt-8 max-w-2xl mx-auto text-left md:text-center">
          外縣市、到場、多地點、特殊或時間較急的案件，由老師依需求確認服務範圍與費用，不進行網站自動計價。
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-[120px] border-t border-ink/10" id="faq">
        <h2 className="text-style-headline-md text-ink mb-8 text-center">常見問題</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group border border-tea-brown/20 bg-surface p-6 open:bg-surface-container transition-colors"
            >
              <summary className="text-style-title-lg text-ink cursor-pointer list-none flex justify-between items-center gap-4">
                {item.q}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0">
                  expand_more
                </span>
              </summary>
              <p className="text-style-body-md text-tea-brown mt-4 pt-4 border-t border-ink/10">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-[120px] border-t border-ink/10 flex flex-col items-center justify-center text-center" id="contact">
        <h2 className="text-style-headline-md text-ink mb-6">準備好安排您的重要日程了嗎？</h2>
        <a
          className="inline-block bg-vermilion text-on-primary px-10 py-4 rounded-[2px] text-style-title-lg hover:bg-primary transition-colors"
          href="/booking"
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/booking')
          }}
        >
          {brand.primaryCta}
        </a>
      </section>
    </div>
  )
}

export default HomePage
