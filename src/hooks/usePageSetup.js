import { useEffect } from 'react'
import { pageTitles } from '../siteData'

export function usePageSetup(pageKey) {
  useEffect(() => {
    document.title = pageTitles[pageKey] ?? pageKey
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  }, [pageKey])
}
