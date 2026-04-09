import { routes } from '../../../siteData'

export function InstructorCoursesSection({ courses, onNavigate }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-3xl font-bold">المنتجات التعليمية</h2>
        <button
          type="button"
          onClick={() => onNavigate(routes.courses.path)}
          className="text-sm font-bold text-primary hover:underline"
        >
          عرض الكل
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group cursor-pointer"
            onClick={() => onNavigate(routes.courseDetails.path)}
          >
            <div className="editorial-shadow relative mb-6 aspect-video overflow-hidden rounded-3xl">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={course.image}
                alt={course.title}
              />
              <div className="absolute right-4 top-4 rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                {course.price ? `$${course.price}.00` : 'مجاناً'}
              </div>
            </div>
            <h4 className="mb-2 text-xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary">
              {course.title}
            </h4>
            <div className="flex items-center gap-4 text-sm font-medium text-outline">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                {course.rating}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
