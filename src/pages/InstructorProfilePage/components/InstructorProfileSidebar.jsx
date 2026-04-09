export function InstructorProfileSidebar({ instructor }) {
  return (
    <aside className="order-2 space-y-8 lg:col-span-4 lg:order-1">
      <div className="space-y-4 rounded-3xl bg-surface-container-low p-8">
        <h3 className="font-headline text-xl font-bold text-on-surface">نبذة تعريفية</h3>
        <p className="text-sm leading-loose text-on-surface-variant">{instructor.longBio}</p>
      </div>
      <div className="editorial-shadow space-y-6 rounded-3xl bg-surface-container-lowest p-8">
        <h3 className="font-headline text-xl font-bold text-on-surface">التواصل الاجتماعي</h3>
        <div className="space-y-4">
          {instructor.socialLinks.map((link) => (
            <a
              key={link.label}
              className="group flex items-center justify-between rounded-2xl bg-surface-container-low p-4 transition-all hover:bg-surface-container"
              href={link.href}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-primary">
                  {link.icon}
                </div>
                <span className="text-sm font-semibold">{link.label}</span>
              </div>
              <span className="material-symbols-outlined text-outline transition-all group-hover:text-primary">
                arrow_back
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
