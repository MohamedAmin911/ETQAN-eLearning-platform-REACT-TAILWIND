export function AllCoursesPageHeader({ searchQuery, onSearchChange }) {
  return (
    <header className="mb-12">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h1 className="mb-4 mt-10 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
            استكشف مسارات المعرفة
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            اكتشف دورات تعليمية مصممة بعناية لتناسب طموحاتك، من التصميم الإبداعي إلى البرمجة
            المتقدمة.
          </p>
        </div>
        <div className="w-full md:w-100">
          <div className="group relative">
            <input
              className="h-14 w-full rounded-2xl border-none bg-surface-container-high pl-6 pr-14 text-on-surface placeholder:text-outline transition-all focus:ring-2 focus:ring-primary/20"
              placeholder="ماذا تريد أن تتعلم اليوم؟"
              type="text"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
            />
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary">
              search
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
