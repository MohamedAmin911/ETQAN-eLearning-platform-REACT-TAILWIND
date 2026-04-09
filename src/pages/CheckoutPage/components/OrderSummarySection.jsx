export function OrderSummarySection({ cartCourses, instructorById, onRemoveFromCart }) {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
          shopping_bag
        </span>
        <h2 className="text-2xl font-bold">ملخص الطلب</h2>
      </div>

      {cartCourses.length ? (
        <div className="space-y-6">
          {cartCourses.map((course) => {
            const instructor = instructorById[course.instructorId]

            return (
              <div
                key={course.id}
                className="flex flex-col items-start gap-6 border-b border-surface-container pb-6 last:border-b-0 last:pb-0 md:flex-row md:items-center"
              >
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-surface-container-low md:w-48">
                  <img alt={course.title} className="h-full w-full object-cover" src={course.image} />
                  <div className="absolute right-2 top-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                    {course.badge}
                  </div>
                </div>

                <div className="grow text-right">
                  <h3 className="mb-1 text-xl font-bold text-on-surface">{course.title}</h3>
                  <p className="mb-4 text-on-surface-variant">
                    المحاضر: {instructor?.name ?? 'مدرب المنصة'} • {course.duration}
                  </p>

                  <div className="flex flex-wrap items-center justify-start gap-3">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      <span className="text-sm">وصول مدى الحياة للمحتوى</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveFromCart(course.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-error/15 bg-error/6 px-4 py-2 text-sm font-bold text-error transition hover:bg-error/12"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                      <span>إزالة من السلة</span>
                    </button>
                  </div>
                </div>

                <div className="font-headline text-2xl font-black text-primary">
                  {course.price ? `${course.price} ر.س` : 'مجانا'}
                </div>
              </div>
            )
          })}

          <div className="border-t border-surface-container pt-8">
            <label className="mb-3 block text-sm font-bold text-on-surface">هل لديك كود خصم؟</label>
            <div className="flex max-w-md gap-3">
              <input
                className="grow rounded-xl border-none bg-surface-container-high px-4 py-3 text-right outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="أدخل الكود هنا"
                type="text"
              />
              <button className="rounded-xl bg-surface-container-highest px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-fixed-dim">
                تطبيق
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-surface-container-low p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-on-surface">سلة الشراء فارغة</h3>
          <p className="text-on-surface-variant">أضف منتجا من صفحة الدورات ليظهر هنا في صفحة الدفع.</p>
        </div>
      )}
    </section>
  )
}
