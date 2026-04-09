import { routes } from '../../../siteData'

export function InstructorProfileHero({ instructor, onNavigate }) {
  return (
    <section className="mx-auto mb-16 max-w-7xl px-6">
      <div className="relative min-h-120 overflow-hidden rounded-3xl bg-surface-container-low">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative z-10 grid w-full items-center gap-12 p-8 md:grid-cols-12 md:p-16">
          <div className="flex flex-col items-center md:col-span-4">
            <img
              alt={instructor.name}
              className="editorial-shadow h-80 w-64 rounded-[2.5rem] object-cover"
              src={instructor.image}
            />
            <div className="mt-8 flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{instructor.students}</div>
                <div className="text-xs font-medium text-outline">طالب</div>
              </div>
              <div className="mt-2 h-8 w-px bg-outline-variant/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{instructor.rating}</div>
                <div className="text-xs font-medium text-outline">تقييم</div>
              </div>
              <div className="mt-2 h-8 w-px bg-outline-variant/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{instructor.courseCount}</div>
                <div className="text-xs font-medium text-outline">منتج</div>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-right md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary-fixed px-4 py-1.5 text-xs font-bold text-on-tertiary-fixed-variant">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified
              </span>
              مدرب معتمد
            </div>
            <h1 className="font-headline text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">
              {instructor.name}
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-on-surface-variant">
              {instructor.title}. {instructor.longBio}
            </p>
            <div className="flex flex-wrap gap-3">
              {instructor.specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-xl bg-surface-container-highest px-4 py-2 text-sm font-semibold text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => onNavigate(routes.signUp.path)}
                className="editorial-shadow flex items-center gap-2 rounded-3xl bg-primary px-10 py-4 font-bold text-on-primary transition-all hover:bg-primary-container"
              >
                <span className="material-symbols-outlined">person_add</span>
                متابعة المحاضر
              </button>
              <button
                type="button"
                className="editorial-shadow rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-4 text-primary transition-all hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
