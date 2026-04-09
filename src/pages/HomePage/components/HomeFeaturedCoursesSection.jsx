import { categoryLabels } from '../../../data/courses'
import { routes } from '../../../siteData'

export function HomeFeaturedCoursesSection({
  courses,
  instructorById,
  wishlistIds,
  onNavigate,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between">
          <div className="text-right">
            <h2 className="mb-4 text-4xl font-bold text-on-surface">المنتجات المميزة</h2>
            <p className="text-on-surface-variant mb-6">بيانات هذه البطاقات الآن تأتي من قائمة منتجات موحدة</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate(routes.courses.path)}
            className="group flex flex-row-reverse items-center gap-2 font-bold text-primary"
          >
            مشاهدة الكل
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
              chevron_left
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const instructor = instructorById[course.instructorId]
            const isWishlisted = wishlistIds.includes(course.id)

            return (
              <article
                key={course.id}
                className="group overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
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
                    className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-primary"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: isWishlisted ? '"FILL" 1' : '"FILL" 0' }}
                    >
                      favorite
                    </span>
                  </button>
                </div>
                <div className="p-8 text-right">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-secondary">
                    {categoryLabels[course.category]}
                  </span>
                  <h4 className="mb-4 text-xl font-bold text-on-surface">{course.title}</h4>
                  <div className="mb-6 flex flex-row-reverse items-center gap-3">
                    <img
                      alt={instructor?.name}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                      src={instructor?.image}
                    />
                    <span className="text-sm text-on-surface-variant">{instructor?.name}</span>
                  </div>
                  <div className="flex flex-row-reverse items-center justify-between border-t border-surface-container pt-6">
                    <div className="flex flex-row-reverse items-center gap-1 text-orange-400">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                      <span className="text-sm font-bold">{course.rating}</span>
                      <span className="text-xs text-on-surface-variant">({course.reviews})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onAddToCart(course.id)}
                      className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
