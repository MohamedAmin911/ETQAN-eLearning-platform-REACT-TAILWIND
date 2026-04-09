import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicTopNav } from '../../../components/PublicTopNav'
import { SiteFooter } from '../../../components/SiteFooter'
import { courses } from '../../../data/courses'
import { instructors } from '../../../data/instructors'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { CourseHeroSection } from './CourseHeroSection'
import { CurriculumSection } from './CurriculumSection'
import { PricingSidebar } from './PricingSidebar'
import { TestimonialsSection } from './TestimonialsSection'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
}`

export function CourseDetailsPage() {
  usePageSetup('CourseDetailsPage')

  const navigate = useNavigate()
  const { addToCart } = useAppState()
  const course = courses[0]
  const instructor = instructors.find((entry) => entry.id === course.instructorId)
  const [openModuleId, setOpenModuleId] = useState(course.curriculum[0]?.id ?? null)

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active="courses" progress="third" maxWidth="max-w-8xl" />
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-24 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <CourseHeroSection course={course} instructor={instructor} />
            <CurriculumSection
              course={course}
              openModuleId={openModuleId}
              onToggleModule={(moduleId, isOpen) => setOpenModuleId(isOpen ? null : moduleId)}
            />
            <TestimonialsSection testimonials={course.testimonials} />
          </div>

          <div className="relative lg:col-span-4">
            <PricingSidebar course={course} onNavigate={navigate} onAddToCart={addToCart} />
          </div>
        </main>

        <SiteFooter variant="course" />
      </div>
    </>
  )
}
