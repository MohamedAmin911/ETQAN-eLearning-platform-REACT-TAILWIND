import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { courses } from '../../data/courses'
import { instructors } from '../../data/instructors'
import { usePageSetup } from '../../hooks/usePageSetup'
import { routes } from '../../siteData'
import { InstructorCoursesSection } from './components/InstructorCoursesSection'
import { InstructorProfileHero } from './components/InstructorProfileHero'
import { InstructorProfileSidebar } from './components/InstructorProfileSidebar'
import { InstructorTestimonialsSection } from './components/InstructorTestimonialsSection'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.editorial-shadow {
  box-shadow: 0px 12px 32px rgba(28, 25, 45, 0.06);
}`

export function InstructorProfilePage() {
  usePageSetup('InstructorProfilePage')

  const navigate = useNavigate()
  const { instructorId } = useParams()
  const instructor = instructors.find((entry) => entry.id === instructorId) ?? instructors[0]
  const instructorCourses = useMemo(
    () => courses.filter((course) => course.instructorId === instructor.id),
    [instructor.id],
  )

  if (!instructorId) {
    return <Navigate to={`${routes.instructor.path}/${instructors[0].id}`} replace />
  }

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active="instructors" />

        <main className="pb-20 pt-24">
          <InstructorProfileHero instructor={instructor} onNavigate={navigate} />

          <section className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
            <InstructorProfileSidebar instructor={instructor} />

            <div className="order-1 space-y-16 lg:col-span-8 lg:order-2">
              <InstructorCoursesSection courses={instructorCourses} onNavigate={navigate} />
              <InstructorTestimonialsSection testimonials={instructor.testimonials} />
            </div>
          </section>
        </main>

        <SiteFooter variant="instructor" />
      </div>
    </>
  )
}
