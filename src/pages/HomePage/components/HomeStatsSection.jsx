const statStyles = [
  {
    icon: 'school',
    glow: 'from-primary/18 via-primary-container/16 to-transparent',
    badge: 'bg-primary/10 text-primary ring-primary/15',
    value: 'from-primary via-primary-container to-secondary',
    accent: 'bg-primary',
  },
  {
    icon: 'deployed_code',
    glow: 'from-secondary/18 via-secondary-container/16 to-transparent',
    badge: 'bg-secondary/10 text-secondary ring-secondary/15',
    value: 'from-secondary via-on-secondary-container to-primary-container',
    accent: 'bg-secondary',
  },
  {
    icon: 'workspace_premium',
    glow: 'from-tertiary/18 via-tertiary-fixed/20 to-transparent',
    badge: 'bg-tertiary/10 text-tertiary ring-tertiary/15',
    value: 'from-tertiary via-tertiary-container to-secondary',
    accent: 'bg-tertiary',
  },
  {
    icon: 'favorite',
    glow: 'from-primary-container/18 via-surface-tint/16 to-transparent',
    badge: 'bg-primary-container/12 text-primary-container ring-primary-container/15',
    value: 'from-primary-container via-surface-tint to-primary',
    accent: 'bg-primary-container',
  },
]

export function HomeStatsSection({ stats }) {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-18 sm:py-22">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-primary shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            أرقام تصنع الثقة
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const style = statStyles[index % statStyles.length]

            return (
              <article
                key={item.label}
                className="stats-card-enter group relative overflow-hidden rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_-42px_rgba(90,69,198,0.38)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-38px_rgba(133,74,121,0.28)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${style.glow} opacity-90`} />
                <div className="pointer-events-none absolute -right-10 top-6 h-28 w-28 rounded-full bg-white/35 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/45 blur-2xl transition duration-500 group-hover:scale-110" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${style.badge}`}>
                    <span className="material-symbols-outlined text-[1.65rem]">{style.icon}</span>
                  </div>

              
                </div>

                <div className="relative mt-8 text-right">
                  <h3
                    className={`bg-linear-to-r ${style.value} bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl`}
                  >
                    {item.value}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-on-surface">{item.label}</p>
                  <p className="mt-2 max-w-[22ch] text-sm leading-6 text-on-surface-variant">
                    مؤشرات حية تعكس نمو المجتمع التعليمي وجودة التجربة داخل المنصة.
                  </p>
                </div>

                <div className="relative mt-6 flex items-center justify-between gap-4">

                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-container">
                    <div
                      className={`stats-progress-line h-full rounded-full bg-linear-to-r ${style.value}`}
                      style={{ animationDelay: `${220 + index * 120}ms` }}
                    />
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
