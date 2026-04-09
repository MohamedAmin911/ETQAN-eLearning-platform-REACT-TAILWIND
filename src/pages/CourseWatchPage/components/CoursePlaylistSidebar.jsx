export function CoursePlaylistSidebar() {
  return (
    <aside className="relative z-10 flex h-full w-80 flex-col overflow-y-auto border-l border-surface-container bg-slate-50 font-['Tajawal']">
      <div className="mb-2 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-bold text-primary">منهج الدورة</h2>
        <p className="flex items-center gap-2 text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-xs" data-icon="analytics">analytics</span>
          تقدمك: ٦٥٪
        </p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div className="h-full w-[65%] rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="mb-2 mt-2 border-b border-surface-container-high px-4 py-3 text-sm font-bold text-on-surface-variant/70">
          الوحدة الأولى: أساسيات التفكير السائل
        </div>
        <div className="cursor-pointer rounded-xl bg-white p-3 font-bold text-primary shadow-sm transition-transform">
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-3">
              <span className="material-symbols-outlined text-primary" data-icon="play_circle" style={{ fontVariationSettings: '"FILL" 1' }}>play_circle</span>
              <span className="text-sm">مقدمة في فلسفة التعلم الحديث</span>
            </div>
            <span className="text-xs text-primary-container">٠٨:٤٥</span>
          </div>
        </div>
        <div className="cursor-pointer rounded-xl p-3 text-slate-500 transition-transform hover:bg-slate-100">
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-3">
              <span className="material-symbols-outlined text-emerald-500" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <span className="text-sm">تفكيك الأنماط الذهنية القديمة</span>
            </div>
            <span className="text-xs">١٢:٢٠</span>
          </div>
        </div>
        <div className="cursor-pointer rounded-xl p-3 text-slate-500 transition-transform hover:bg-slate-100">
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-3">
              <span className="material-symbols-outlined" data-icon="lock">lock</span>
              <span className="text-sm">آليات بناء الروابط المعرفية</span>
            </div>
            <span className="text-xs">١٥:١٠</span>
          </div>
        </div>
        <div className="mb-2 mt-6 border-b border-surface-container-high px-4 py-3 text-sm font-bold text-on-surface-variant/70">
          الوحدة الثانية: أدوات الإبداع المتقدمة
        </div>
        <div className="cursor-pointer rounded-xl p-3 text-slate-500 transition-transform hover:bg-slate-100">
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-3">
              <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
              <span className="text-sm">مختبر الأفكار المستحيلة</span>
            </div>
            <span className="text-xs">٢٠:٠٠</span>
          </div>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-5 gap-1 border-t border-surface-container bg-surface-container-low p-4">
        {['menu_book', 'attachment', 'edit_note', 'forum', 'star'].map((icon, index) => (
          <button key={icon} className={`flex flex-col items-center gap-1 p-2 ${index === 0 ? 'text-primary' : 'text-slate-400'}`}>
            <span className="material-symbols-outlined text-xl" data-icon={icon} style={index === 0 ? { fontVariationSettings: '"FILL" 1' } : undefined}>{icon}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
