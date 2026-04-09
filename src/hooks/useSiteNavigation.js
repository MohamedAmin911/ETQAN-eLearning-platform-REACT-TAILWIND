import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../siteData'

const routeEntries = [
  ['الأصناف', routes.courses.path],
  ['تصفح الدورات', routes.courses.path],
  ['الدورات', routes.courses.path],
  ['ابدأ التعلم الآن', routes.courses.path],
  ['استكشف المزيد', routes.courses.path],
  ['اكتشف المزيد', routes.courses.path],
  ['الرئيسية', routes.home.path],
  ['الصفحة الرئيسية', routes.home.path],
  ['المدربون', routes.instructor.path],
  ['تعلمي', routes.dashboard.path],
  ['تركيزي', routes.dashboard.path],
  ['مساراتي', routes.watch.path],
  ['المكتبة', routes.courses.path],
  ['تسجيل الدخول', routes.signIn.path],
  ['إنشاء حساب', routes.signUp.path],
  ['اشترك مجاناً', routes.signUp.path],
  ['ابدأ مجاناً', routes.signUp.path],
  ['انضم إلى الفصول', routes.watch.path],
  ['ادفع الآن', routes.checkout.path],
]

const routeMap = new Map(routeEntries)

export function useSiteNavigation() {
  const navigate = useNavigate()

  return useCallback(
    (event) => {
      const target = event.target instanceof Element ? event.target.closest('a, button') : null

      if (!target) {
        return
      }

      const label = target.textContent?.trim().replace(/\s+/g, ' ')

      if (!label) {
        return
      }

      const route = routeMap.get(label)

      if (route) {
        event.preventDefault()
        navigate(route)
      }
    },
    [navigate],
  )
}
