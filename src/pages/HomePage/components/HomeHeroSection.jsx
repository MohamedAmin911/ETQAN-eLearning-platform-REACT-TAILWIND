import { BrandLogo } from '../../../components/BrandLogo'
import { routes } from '../../../siteData'

export function HomeHeroSection({ onNavigate }) {
  return (
    <section className="relative flex min-h-217.5 items-center overflow-hidden px-6 lg:px-12">
      <div className="absolute right-[-10%] top-[-10%] h-125 w-125 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-100 w-100 rounded-full bg-tertiary/10 blur-[100px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 text-right lg:order-1">
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.2] text-on-surface lg:text-7xl">
            ابدأ رحلتك <span className="text-primary italic">التعليمية</span> اليوم
          </h1>
          <p className="mb-10 ml-auto max-w-xl text-lg leading-relaxed text-on-surface-variant lg:text-xl">
            اكتشف مكتبة من المنتجات التعليمية العملية في البرمجة، التصميم، والأعمال مع نخبة من
            المدربين المتخصصين.
          </p>
          <div className="flex flex-row-reverse justify-start gap-4">
            <button
              type="button"
              onClick={() => onNavigate(routes.signUp.path)}
              className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform duration-300 hover:scale-105"
            >
              ابدأ التعلم الآن
            </button>
            <button
              type="button"
              onClick={() => onNavigate(routes.courses.path)}
              className="rounded-xl bg-surface-container-high px-8 py-4 text-lg font-bold text-primary transition-colors duration-300 hover:bg-surface-container-highest"
            >
              تصفح المنتجات
            </button>
          </div>
        </div>
        <div className="group relative order-1 lg:order-2">
          <div className="absolute inset-0 rotate-3 rounded-3xl transition-transform duration-500 group-hover:rotate-6" />
          <div className="relative z-10 flex aspect-4/3 w-full items-center justify-center transition-transform duration-500 hover:-translate-y-2">
            <BrandLogo className="h-40 w-auto object-contain sm:h-52 lg:h-94" />
          </div>
        </div>
      </div>
    </section>
  )
}
