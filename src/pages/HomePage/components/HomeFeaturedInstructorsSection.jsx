import { routes } from '../../../siteData'

export function HomeFeaturedInstructorsSection({ instructors, onNavigate }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-on-surface">المدربون المميزون</h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          هذه القائمة تعتمد الآن على بيانات مدربين موحدة قابلة لإعادة الاستخدام عبر الصفحات.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {instructors.map((instructor) => (
          <article
            key={instructor.id}
            className="cursor-pointer rounded-3xl bg-surface-container p-8 text-right transition-colors duration-300 hover:bg-primary hover:text-white"
            onClick={() => onNavigate(`${routes.instructor.path}/${instructor.id}`)}
          >
            <img
              alt={instructor.name}
              className="mb-6 h-24 w-24 rounded-2xl object-cover"
              src={instructor.image}
            />
            <h3 className="mb-2 text-2xl font-bold">{instructor.name}</h3>
            <p className="mb-4 text-sm">{instructor.title}</p>
            <p className="mb-6 leading-relaxed">{instructor.bio}</p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onNavigate(`${routes.instructor.path}/${instructor.id}`)
              }}
              className="rounded-xl border border-current px-4 py-3 font-bold"
            >
              عرض الملف الشخصي
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
