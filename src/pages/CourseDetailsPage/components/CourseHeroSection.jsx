export function CourseHeroSection({ course, instructor }) {
  return (
    <>
      <section className="group relative overflow-hidden rounded-2xl shadow-2xl">
        <img alt={course.title} className="aspect-video w-full object-cover" src={course.previewImage} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button className="glass-panel flex h-20 w-20 items-center justify-center rounded-full text-primary shadow-xl">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
          </button>
        </div>
      </section>
      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold text-on-tertiary-fixed-variant">{course.badge}</span>
            <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed-variant">{course.level}</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-5xl">{course.title}</h1>
          <p className="text-lg leading-relaxed text-on-surface-variant">{course.description}</p>
        </div>
        <div className="flex items-center gap-8 border-y border-outline-variant/20 py-4">
          <div className="flex items-center gap-3">
            <img alt={instructor?.name} className="h-12 w-12 rounded-full object-cover" src={instructor?.image} />
            <div>
              <p className="text-xs text-on-surface-variant">المحاضر</p>
              <p className="font-bold text-on-surface">{instructor?.name}</p>
            </div>
          </div>
          <div className="h-10 w-px bg-outline-variant/20" />
          <div>
            <p className="text-xs text-on-surface-variant">التقييم</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-on-surface">{course.rating}</span>
              <span className="text-xs text-on-surface-variant">({course.reviews} تقييم)</span>
            </div>
          </div>
          <div className="h-10 w-px bg-outline-variant/20" />
          <div>
            <p className="text-xs text-on-surface-variant">الطلاب</p>
            <div className="font-bold text-on-surface">{course.students.toLocaleString()}</div>
          </div>
        </div>
      </section>
    </>
  )
}
