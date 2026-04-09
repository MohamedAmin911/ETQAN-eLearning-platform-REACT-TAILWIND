import { routes } from '../../../siteData'

export function InstructorCard({ instructor, onNavigate }) {
  return (
    <article
      onClick={() => onNavigate(`${routes.instructor.path}/${instructor.id}`)}
      className="editorial-shadow cursor-pointer rounded-3xl bg-surface-container-lowest p-8 text-right transition-all duration-300 hover:-translate-y-1 hover:bg-white"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <img
          alt={instructor.name}
          src={instructor.image}
          className="h-24 w-24 rounded-2xl object-cover"
        />
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold text-on-tertiary-fixed-variant">
            مدرب معتمد
          </span>
          <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed-variant">
            {instructor.courseCount} منتجات
          </span>
        </div>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-on-surface">{instructor.name}</h2>
      <p className="mb-4 text-sm font-medium text-primary">{instructor.title}</p>
      <p className="mb-6 line-clamp-3 leading-7 text-on-surface-variant">{instructor.bio}</p>
      <div className="mb-6 flex flex-wrap justify-end gap-2">
        {instructor.specialties.slice(0, 3).map((specialty) => (
          <span
            key={specialty}
            className="rounded-xl bg-surface-container-high px-3 py-2 text-xs font-semibold text-primary"
          >
            {specialty}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-surface-container pt-5 text-sm">
        <div className="text-left">
          <p className="font-bold text-on-surface">{instructor.students}</p>
          <p className="text-xs text-on-surface-variant">طلاب</p>
        </div>
        <div className="text-left">
          <p className="font-bold text-on-surface">{instructor.rating}</p>
          <p className="text-xs text-on-surface-variant">تقييم</p>
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNavigate(`${routes.instructor.path}/${instructor.id}`)
          }}
          className="rounded-xl bg-primary px-4 py-2 font-bold text-on-primary transition-transform hover:scale-[0.98]"
        >
          عرض التفاصيل
        </button>
      </div>
    </article>
  )
}
