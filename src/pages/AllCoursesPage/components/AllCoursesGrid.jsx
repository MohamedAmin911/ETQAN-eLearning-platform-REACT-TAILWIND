import { categoryLabels } from '../../../data/courses'
import { routes } from '../../../siteData'

function CourseCard({
  course,
  instructor,
  inWishlist,
  inCart,
  enrolled,
  onNavigate,
  onToggleWishlist,
  onAddToCart,
  onEnrollCourse,
}) {
  return (
    <article className="editorial-shadow group overflow-hidden rounded-2xl bg-surface-container-lowest transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={course.image}
        />
        <div className="glass-nav absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-bold text-primary">
          {course.price ? `$${course.price}.00` : 'مجاناً'}
        </div>
        <button
          type="button"
          onClick={() => onToggleWishlist(course.id)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur transition-colors ${
            inWishlist ? 'text-rose-500' : 'text-on-surface hover:text-error'
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: inWishlist ? '"FILL" 1' : '"FILL" 0' }}
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-lg bg-surface-container-high px-2.5 py-1 text-xs font-bold text-primary-container">
            {categoryLabels[course.category]}
          </span>
          <span className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">
            {course.badge}
          </span>
          <div className="mr-auto flex items-center gap-1 text-sm font-bold text-secondary">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span>{course.rating}</span>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-on-surface-variant">
          {course.description}
        </p>
        <div className="mb-5 flex items-center justify-between text-sm text-on-surface-variant">
          <span>{instructor?.name ?? 'مدرب المنصة'}</span>
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate(routes.courseDetails.path)}
            className="flex-1 rounded-xl border border-primary/10 px-4 py-3 font-semibold text-primary transition-colors hover:bg-violet-50"
          >
            تفاصيل الدورة
          </button>
          {enrolled ? (
            <button
              type="button"
              onClick={() => onNavigate(routes.watch.path)}
              className="flex-1 rounded-xl bg-primary px-4 py-3 font-bold text-white transition-transform hover:scale-[0.98]"
            >
              متابعة التعلم
            </button>
          ) : inCart ? (
            <button
              type="button"
              onClick={() => onNavigate(routes.checkout.path)}
              className="flex-1 rounded-xl bg-secondary px-4 py-3 font-bold text-white transition-transform hover:scale-[0.98]"
            >
              متابعة الدفع
            </button>
          ) : course.price === 0 ? (
            <button
              type="button"
              onClick={() => onEnrollCourse(course.id)}
              className="flex-1 rounded-xl bg-primary px-4 py-3 font-bold text-white transition-transform hover:scale-[0.98]"
            >
              ابدأ الآن
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onAddToCart(course.id)}
              className="flex-1 rounded-xl bg-primary px-4 py-3 font-bold text-white transition-transform hover:scale-[0.98]"
            >
              أضف إلى السلة
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export function AllCoursesGrid({
  courses,
  instructorById,
  cartIds,
  wishlistIds,
  enrolledIds,
  onNavigate,
  onToggleWishlist,
  onAddToCart,
  onEnrollCourse,
}) {
  if (!courses.length) {
    return (
      <div className="editorial-shadow rounded-3xl bg-white p-12 text-center">
        <h3 className="mb-3 text-2xl font-bold text-on-surface">لا توجد نتائج مطابقة</h3>
        <p className="mx-auto max-w-xl text-on-surface-variant">
          جرّب تغيير كلمات البحث أو أزل بعض الفلاتر للوصول إلى دورات أكثر.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          instructor={instructorById[course.instructorId]}
          inWishlist={wishlistIds.includes(course.id)}
          inCart={cartIds.includes(course.id)}
          enrolled={enrolledIds.includes(course.id)}
          onNavigate={onNavigate}
          onToggleWishlist={onToggleWishlist}
          onAddToCart={onAddToCart}
          onEnrollCourse={onEnrollCourse}
        />
      ))}
    </div>
  )
}
