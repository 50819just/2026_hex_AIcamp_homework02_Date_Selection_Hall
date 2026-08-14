import Header from './Header'
import Footer from './Footer'

function PageShell({ children }) {
  return (
    <div id="top" className="min-h-screen bg-background bg-paper-grain text-ink">
      <Header />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
    </div>
  )
}

export default PageShell
