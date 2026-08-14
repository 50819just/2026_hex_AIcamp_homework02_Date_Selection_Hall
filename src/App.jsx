import { useRouter, navigateTo } from './hooks/useRouter'
import PageShell from './components/layout/PageShell'
import HomePage from './pages/HomePage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PricingPage from './pages/PricingPage'
import BookingPage from './pages/BookingPage'
import BookingSubmittedPage from './pages/BookingSubmittedPage'
import DepositPaymentSuccessPage from './pages/DepositPaymentSuccessPage'
import DepositPaymentFailedPage from './pages/DepositPaymentFailedPage'
import SignInPage from './pages/SignInPage'

const BARE_ROUTES = new Set(['/booking', '/booking/submitted', '/booking/payment/success', '/booking/payment/failed'])

function matchServiceId(pathname) {
  const match = pathname.match(/^\/services\/([\w-]+)\/?$/)
  return match ? match[1] : null
}

function NotFoundPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] py-24 text-center">
      <p className="text-style-label-sm text-vermilion mb-4">404</p>
      <h1 className="text-style-headline-lg text-ink mb-6">找不到這個頁面</h1>
      <p className="text-style-body-md text-tea-brown mb-8">這個網址可能已調整，請回到首頁重新開始。</p>
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

function resolvePage(pathname) {
  const serviceId = matchServiceId(pathname)

  if (pathname === '/') {
    return <HomePage />
  }

  if (serviceId) {
    return <ServiceDetailPage serviceId={serviceId} />
  }

  switch (pathname) {
    case '/pricing':
      return <PricingPage />
    case '/booking':
      return <BookingPage />
    case '/booking/submitted':
      return <BookingSubmittedPage />
    case '/booking/payment/success':
      return <DepositPaymentSuccessPage />
    case '/booking/payment/failed':
      return <DepositPaymentFailedPage />
    case '/sign-in':
      return <SignInPage />
    default:
      return <NotFoundPage />
  }
}

function App() {
  const { pathname } = useRouter()
  const isBare = BARE_ROUTES.has(pathname)

  return <PageShell bare={isBare}>{resolvePage(pathname)}</PageShell>
}

export default App
