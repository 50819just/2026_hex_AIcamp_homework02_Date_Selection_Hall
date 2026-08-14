import Header from './Header'
import Footer from './Footer'

function PageShell({ children, bare = false }) {
  if (bare) {
    return (
      <div id="top" className="min-h-screen bg-background text-ink">
        {children}
      </div>
    )
  }

  return (
    <div id="top" className="min-h-screen bg-background text-ink">
      <Header />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
    </div>
  )
}

export default PageShell
