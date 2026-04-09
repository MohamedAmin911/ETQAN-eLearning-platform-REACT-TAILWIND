import { categoryLabels, courseCategories } from '../../../data/courses'
import { routes } from '../../../siteData'

const priceOptions = [
  ['all', 'كل الدورات'],
  ['free', 'دورات مجانية'],
  ['paid', 'دورات مدفوعة'],
]

export function AllCoursesFiltersSidebar({
  category,
  priceFilter,
  minimumRating,
  ratingOptions,
  onCategoryChange,
  onPriceFilterChange,
  onMinimumRatingChange,
  onNavigate,
  featuredInstructorId,
}) {
  return (
    <aside className="w-full space-y-8 lg:w-72">
      <div className="editorial-shadow rounded-2xl bg-surface-container-lowest p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">تصفية النتائج</h2>
          <span className="material-symbols-outlined text-outline">filter_list</span>
        </div>
        <div className="mb-8 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
            التصنيفات
          </h3>
          <div className="flex flex-wrap gap-2">
            {courseCategories.map((entry) => (
              <button
                key={entry}
                type="button"
                onClick={() => onCategoryChange(entry)}
                className={
                  category === entry
                    ? 'rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary'
                    : 'rounded-full bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-variant'
                }
              >
                {categoryLabels[entry]}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-8 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">السعر</h3>
          <div className="space-y-3">
            {priceOptions.map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onPriceFilterChange(value)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-right transition-colors ${
                  priceFilter === value
                    ? 'bg-violet-50 font-semibold text-primary'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                    priceFilter === value
                      ? 'border-primary bg-primary text-white'
                      : 'border-outline-variant'
                  }`}
                >
                  {priceFilter === value ? (
                    <span className="material-symbols-outlined text-xs">check</span>
                  ) : null}
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
            التقييم
          </h3>
          <div className="space-y-3">
            {ratingOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onMinimumRatingChange(option)}
                className={`flex items-center gap-2 transition-colors ${
                  minimumRating === option
                    ? 'font-bold text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span>{option === 0 ? 'الكل' : `${option} فأعلى`}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-tertiary to-tertiary-container p-8 text-on-tertiary">
        <div className="relative z-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-80">كن معلماً</p>
          <h4 className="mb-4 text-2xl font-bold leading-tight">شارك معرفتك مع العالم</h4>
          <button
            type="button"
            onClick={() => onNavigate(`${routes.instructor.path}/${featuredInstructorId}`)}
            className="rounded-xl bg-white px-6 py-2 text-sm font-bold text-tertiary transition-transform hover:scale-105"
          >
            انضم إلينا
          </button>
        </div>
        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      </div>
    </aside>
  )
}
