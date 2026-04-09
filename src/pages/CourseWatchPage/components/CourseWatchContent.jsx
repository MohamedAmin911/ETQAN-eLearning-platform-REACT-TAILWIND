export function CourseWatchContent() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 flex flex-row-reverse items-start justify-between">
        <div>
          <nav className="mb-2 flex flex-row-reverse gap-2 text-sm font-medium text-secondary">
            <span>هندسة التفكير الإبداعي</span>
            <span className="text-slate-300">/</span>
            <span>الوحدة الأولى</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-on-surface">مقدمة في فلسفة التعلم الحديث</h1>
          <p className="max-w-3xl leading-relaxed text-on-surface-variant">
            في هذا الدرس، نستكشف الأسس الفلسفية التي يقوم عليها مفهوم "السيولة المعرفية" وكيف يمكن للمتعلم المعاصر أن يتكيف مع تدفق المعلومات اللامتناهي دون أن يفقد قدرته على التفكير النقدي العميق.
          </p>
        </div>
        <div className="flex flex-row-reverse gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-surface-container-high px-6 py-3 font-bold text-on-secondary-container transition-colors hover:bg-surface-container-highest">
            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            الدرس السابق
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
            الدرس التالي
            <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm md:col-span-2">
          <div className="mb-6 flex flex-row-reverse items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-bold text-on-surface">
              <span className="material-symbols-outlined text-secondary" data-icon="folder_zip">folder_zip</span>
              مصادر التعلم
            </h3>
            <button className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
              تحميل الكل
            </button>
          </div>
          <div className="space-y-4">
            {[
              ['description', 'bg-red-100 text-red-600', 'ملخص الفلسفة السائلة.pdf', '2.4 MB'],
              ['map', 'bg-blue-100 text-blue-600', 'خريطة المفاهيم الذهنية.jpg', '1.8 MB'],
            ].map(([icon, colors, title, size]) => (
              <div key={title} className="flex flex-row-reverse items-center justify-between rounded-xl border border-outline-variant/10 bg-surface-container-low p-4">
                <div className="flex flex-row-reverse items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors}`}>
                    <span className="material-symbols-outlined" data-icon={icon}>{icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold">{title}</div>
                    <div className="text-xs text-on-surface-variant">{size}</div>
                  </div>
                </div>
                <button className="rounded-lg p-2 transition-colors hover:bg-white">
                  <span className="material-symbols-outlined text-slate-400" data-icon="download">download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-surface-container-high p-6">
          <div className="absolute left-0 top-0 h-24 w-24 -translate-x-12 -translate-y-12 rounded-full bg-tertiary/10 blur-2xl" />
          <h3 className="relative z-10 mb-4 flex items-center gap-2 text-xl font-bold text-on-surface">
            <span className="material-symbols-outlined text-tertiary" data-icon="sticky_note_2">sticky_note_2</span>
            ملاحظاتك الشخصية
          </h3>
          <textarea className="flex-1 resize-none rounded-xl border-none bg-white/50 p-4 text-sm transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20" placeholder="اكتب أفكارك هنا لتثبيتها..." defaultValue="" />
          <button className="mt-4 w-full rounded-xl bg-white py-3 font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white">
            حفظ الملاحظة
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-row-reverse items-center gap-8 rounded-3xl bg-linear-to-br from-primary-container to-primary p-8 text-on-primary shadow-xl">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white/20 shadow-lg">
          <img alt="المحاضر" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1770058436726-55d41e67caf6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <h4 className="mb-2 text-2xl font-bold">د. يوسف الأحمدي</h4>
          <p className="leading-relaxed text-on-primary-container opacity-90">خبير في استراتيجيات التعلم المتسارع والابتكار المعرفي. قام بتدريب أكثر من ٥٠ ألف طالب حول العالم على تقنيات التفكير الإبداعي.</p>
          <div className="mt-4 flex flex-row-reverse gap-4">
            <span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              ٤.٩ تقييم
            </span>
            <span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
              ١٢ دورة تدريبية
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
