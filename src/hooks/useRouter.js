import { useEffect, useState } from 'react'

const NAVIGATE_EVENT = 'app:navigate'

function getLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
  }
}

export function navigateTo(path) {
  const current = `${window.location.pathname}${window.location.search}`

  if (path === current) {
    return
  }

  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  window.scrollTo({ top: 0 })
}

export function navigateToSection(sectionId) {
  if (window.location.pathname !== '/') {
    navigateTo('/')
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return
  }

  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

export function useRouter() {
  const [location, setLocation] = useState(getLocation)

  useEffect(() => {
    const handleChange = () => setLocation(getLocation())
    window.addEventListener('popstate', handleChange)
    window.addEventListener(NAVIGATE_EVENT, handleChange)

    return () => {
      window.removeEventListener('popstate', handleChange)
      window.removeEventListener(NAVIGATE_EVENT, handleChange)
    }
  }, [])

  return location
}

export function useSearchParam(key) {
  const { search } = useRouter()
  return new URLSearchParams(search).get(key)
}
