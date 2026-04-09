import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { courses } from '../../data/courses'
import { instructors } from '../../data/instructors'
import { useAppState } from '../../hooks/useAppState'
import { usePageSetup } from '../../hooks/usePageSetup'
import { HomeFeaturedCoursesSection } from './components/HomeFeaturedCoursesSection'
import { HomeFeaturedInstructorsSection } from './components/HomeFeaturedInstructorsSection'
import { HomeHeroSection } from './components/HomeHeroSection'
import { HomeStatsSection } from './components/HomeStatsSection'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
body {
  font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;
  scroll-behavior: smooth;
}
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
}`

export function HomePage() {
  usePageSetup('HomePage')

  const navigate = useNavigate()
  const { addToCart, toggleWishlist, wishlistIds } = useAppState()

  const instructorById = useMemo(
    () => Object.fromEntries(instructors.map((instructor) => [instructor.id, instructor])),
    [],
  )

  const featuredCourses = courses.slice(0, 3)
  const featuredInstructors = instructors.slice(0, 3)

  const stats = [
    { value: '150K+', label: 'طالب متميز' },
    { value: `${courses.length}+`, label: 'منتج تعليمي' },
    { value: `${instructors.length}+`, label: 'مدرب خبير' },
    { value: '98%', label: 'نسبة الرضا' },
  ]

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active={null} />

        <main className="pt-24">
          <HomeHeroSection onNavigate={navigate} />
          <HomeStatsSection stats={stats} />
          <HomeFeaturedCoursesSection
            courses={featuredCourses}
            instructorById={instructorById}
            wishlistIds={wishlistIds}
            onNavigate={navigate}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
          />
          <HomeFeaturedInstructorsSection instructors={featuredInstructors} onNavigate={navigate} />
        </main>

        <SiteFooter variant="marketing" />
      </div>
    </>
  )
}
