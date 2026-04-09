export function CurriculumSection({ course, openModuleId, onToggleModule }) {
  return (
    <section className="space-y-8">
      <h2 className="font-headline text-2xl font-bold">منهج المنتج</h2>
      <div className="space-y-4">
        {course.curriculum.map((module, index) => {
          const isOpen = openModuleId === module.id
          return (
            <div key={module.id} className="overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-300">
              <button type="button" onClick={() => onToggleModule(module.id, isOpen)} className="flex w-full items-center justify-between px-6 py-5 transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-bold">{module.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-on-surface-variant">{module.lessons.length} دروس • {module.duration}</span>
                  <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
                </div>
              </button>
              {isOpen ? (
                <div className="space-y-4 px-14 pb-5">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between py-2 text-sm">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">play_circle</span>
                        <span className="text-on-surface-variant">{lesson.title}</span>
                      </div>
                      <span className="text-on-surface-variant/60">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
