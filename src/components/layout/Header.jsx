import { navigateTo, navigateToSection, useRouter } from '../../hooks/useRouter'

const navLinks = [
  { label: '首頁', isActive: (pathname) => pathname === '/', onClick: () => navigateTo('/') },
  {
    label: '服務項目',
    isActive: (pathname) => pathname.startsWith('/services/'),
    onClick: () => navigateToSection('services'),
  },
  { label: '價格說明', isActive: (pathname) => pathname === '/pricing', onClick: () => navigateTo('/pricing') },
  { label: '常見問題', isActive: () => false, onClick: () => navigateToSection('faq') },
  { label: '聯絡我們', isActive: () => false, onClick: () => navigateToSection('contact') },
]

function Header() {
  const { pathname } = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-md border-b border-ink/10">
      <div className="flex justify-between items-center px-6 md:px-[80px] py-4 max-w-[1440px] mx-auto">
        <a
          href="/"
          aria-label="回到首頁"
          className="flex items-center gap-2 shrink-0"
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/')
          }}
        >
          <img
            alt="玄機堂擇日舘 Logo"
            className="h-8 w-auto opacity-80"
            src="/branding/logo-symbol-on-light.png"
          />
          <span className="text-style-title-lg text-ink tracking-wide">玄機堂擇日舘</span>
        </a>

        <nav className="hidden md:flex gap-8" aria-label="主要導覽">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#top"
              className={`text-style-body-md transition-colors duration-300 ${
                link.isActive(pathname)
                  ? 'text-vermilion border-b-2 border-vermilion pb-1'
                  : 'text-tea-brown hover:text-vermilion'
              }`}
              onClick={(event) => {
                event.preventDefault()
                link.onClick()
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/booking"
          className="bg-vermilion text-on-primary px-6 py-2 rounded-[2px] text-style-body-md hover:bg-primary transition-colors shrink-0"
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/booking')
          }}
        >
          開始預約
        </a>
      </div>
    </header>
  )
}

export default Header
