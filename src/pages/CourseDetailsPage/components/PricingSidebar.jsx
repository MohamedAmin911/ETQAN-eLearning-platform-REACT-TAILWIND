import { routes } from '../../../siteData'

export function PricingSidebar({ course, onNavigate, onAddToCart }) {
  return (
    <div className="sticky top-28 space-y-6">
      <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
        <div className="mb-6">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-on-surface">${course.price}.00</span>
            <span className="text-sm text-on-surface-variant line-through">${course.originalPrice}.00</span>
          </div>
          <p className="text-sm font-bold text-tertiary">خصم {Math.round((1 - course.price / course.originalPrice) * 100)}% لفترة محدودة</p>
        </div>
        <div className="space-y-4">
          <button type="button" onClick={() => onNavigate(routes.checkout.path)} className="w-full rounded-xl bg-linear-to-r from-primary to-primary-container py-4 text-lg font-bold text-on-primary transition-all duration-300 hover:scale-[0.98] hover:shadow-lg">
            اشترك الآن
          </button>
          <button type="button" onClick={() => onAddToCart(course.id)} className="w-full rounded-xl border-2 border-primary py-4 font-bold text-primary transition-all hover:bg-primary/5">
            أضف إلى السلة
          </button>
        </div>
        <div className="mt-8 space-y-4">
          <h4 className="border-b border-outline-variant/10 pb-2 font-bold text-on-surface">يتضمن هذا المنتج:</h4>
          <ul className="space-y-3">
            {course.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-2xl bg-surface-container p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-on-surface">المقاعد المتبقية بالخصم</span>
          <span className="text-sm font-bold text-primary">12 / 100</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div className="h-full w-[88%] bg-primary" />
        </div>
        <p className="mt-4 text-center text-xs text-on-surface-variant">انضم إلى {course.students.toLocaleString()} متعلم نشط</p>
      </div>
    </div>
  )
}
