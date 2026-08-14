import { navigateTo, navigateToSection } from '../../hooks/useRouter'
import { contact } from '../../data/siteContent'

const footerLinks = [
  { label: '首頁', onClick: () => navigateTo('/') },
  { label: '服務項目', onClick: () => navigateToSection('services') },
  { label: '價格說明', onClick: () => navigateTo('/pricing') },
  { label: '常見問題', onClick: () => navigateToSection('faq') },
  { label: '聯絡我們', onClick: () => navigateToSection('contact') },
]

function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 lg:px-[80px] py-16 md:py-[120px] flex flex-col md:flex-row justify-between gap-6 bg-surface-container-highest border-t border-ink/10">
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex items-center gap-2">
          <img
            alt="玄機堂擇日舘 Logo"
            className="h-8 w-auto opacity-80"
            src={`${import.meta.env.BASE_URL}branding/logo-symbol-on-light.png`}
          />
          <span className="text-style-title-lg text-ink tracking-wide">玄機堂擇日舘</span>
        </div>

        <div className="text-style-body-md text-tea-brown space-y-1">
          <p className="text-style-label-sm text-tea-brown/70 tracking-widest uppercase mb-1">聯絡老師</p>
          <p>{contact.teacherName}</p>
          <p>
            電話：
            <a className="hover:text-vermilion hover:underline" href="tel:0932089393">
              {contact.phone}
            </a>
          </p>
          <p>
            Email：
            <a className="hover:text-vermilion hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p>LINE：{contact.line}</p>
          <p>地址：{contact.address}</p>
          <p className="text-style-label-sm text-tea-brown/70 mt-2">{contact.note}</p>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-4 justify-between">
        <nav className="flex flex-wrap gap-4 md:gap-6 md:justify-end" aria-label="頁尾導覽">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href="#top"
              className="text-style-body-md text-tea-brown hover:underline"
              onClick={(event) => {
                event.preventDefault()
                link.onClick()
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-style-body-md text-tea-brown">© 玄機堂擇日舘 版權所有</p>
      </div>
    </footer>
  )
}

export default Footer
