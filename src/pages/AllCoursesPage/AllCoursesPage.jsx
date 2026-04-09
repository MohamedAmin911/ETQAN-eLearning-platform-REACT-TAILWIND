import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicTopNav } from '../../components/PublicTopNav'
import { SiteFooter } from '../../components/SiteFooter'
import { instructors } from '../../data/instructors'
import { useAppState } from '../../hooks/useAppState'
import { usePageSetup } from '../../hooks/usePageSetup'
import { AllCoursesFiltersSidebar } from './components/AllCoursesFiltersSidebar'
import { AllCoursesGrid } from './components/AllCoursesGrid'
import { AllCoursesPageHeader } from './components/AllCoursesPageHeader'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  display: inline-block;
  line-height: 1;
  direction: ltr;
}
body {
  font-family: 'Plus Jakarta Sans', 'Tajawal', sans-serif;
  background-color: #fdf8ff;
}
.glass-nav {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
}
.editorial-shadow {
  box-shadow: 0px 12px 32px rgba(28, 25, 45, 0.06);
}`

const ratingOptions = [0, 4, 4.5]

export function AllCoursesPage() {
  usePageSetup('AllCoursesPage')

  const navigate = useNavigate()
  const { courses, cartIds, wishlistIds, enrolledIds, addToCart, toggleWishlist, enrollCourse } =
    useAppState()

  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [minimumRating, setMinimumRating] = useState(0)

  const instructorById = useMemo(
    () => Object.fromEntries(instructors.map((instructor) => [instructor.id, instructor])),
    [],
  )

  const filteredCourses = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return courses.filter((course) => {
      const instructorName = instructorById[course.instructorId]?.name ?? ''
      const matchesQuery =
        !normalizedQuery ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        instructorName.toLowerCase().includes(normalizedQuery) ||
        course.description.toLowerCase().includes(normalizedQuery)

      const matchesCategory = category === 'all' || course.category === category
      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'free' && course.price === 0) ||
        (priceFilter === 'paid' && course.price > 0)
      const matchesRating = course.rating >= minimumRating

      return matchesQuery && matchesCategory && matchesPrice && matchesRating
    })
  }, [category, courses, instructorById, minimumRating, priceFilter, searchQuery])

  return (
    <>
      <style>{pageStyles}</style>

      <div>
        <PublicTopNav active="courses" />

        <main className="mx-auto min-h-screen max-w-8xl px-6 pb-20 pt-28">
          <AllCoursesPageHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <div className="flex flex-col gap-10 lg:flex-row">
            <AllCoursesFiltersSidebar
              category={category}
              priceFilter={priceFilter}
              minimumRating={minimumRating}
              ratingOptions={ratingOptions}
              onCategoryChange={setCategory}
              onPriceFilterChange={setPriceFilter}
              onMinimumRatingChange={setMinimumRating}
              onNavigate={navigate}
              featuredInstructorId={instructors[0].id}
            />

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-on-surface-variant">{filteredCourses.length} دورة مطابقة</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setCategory('all')
                    setPriceFilter('all')
                    setMinimumRating(0)
                  }}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  إعادة ضبط الفلاتر
                </button>
              </div>

              <AllCoursesGrid
                courses={filteredCourses}
                instructorById={instructorById}
                cartIds={cartIds}
                wishlistIds={wishlistIds}
                enrolledIds={enrolledIds}
                onNavigate={navigate}
                onToggleWishlist={toggleWishlist}
                onAddToCart={addToCart}
                onEnrollCourse={enrollCourse}
              />
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
