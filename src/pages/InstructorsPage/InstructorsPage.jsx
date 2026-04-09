import { useNavigate } from 'react-router-dom'
import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { instructors } from '../../data/instructors'
import { usePageSetup } from '../../hooks/usePageSetup'
import { InstructorCard } from './components/InstructorCard'
import { InstructorsPageHeader } from './components/InstructorsPageHeader'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
body {
  font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;
  background-color: #fdf8ff;
}
.editorial-shadow {
  box-shadow: 0px 12px 32px rgba(28, 25, 45, 0.06);
}`

export function InstructorsPage() {
  usePageSetup('InstructorsPage')

  const navigate = useNavigate()

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active="instructors" />

        <main className="mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-28">
          <InstructorsPageHeader />

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} onNavigate={navigate} />
            ))}
          </section>
        </main>

        <SiteFooter variant="instructor" />
      </div>
    </>
  )
}
