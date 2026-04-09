import { BrandLogo } from './BrandLogo'

export function SiteFooter({ variant = 'marketing' }) {
  if (variant === 'simple') {
    return (
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto w-full max-w-8xl px-8 py-12">
          <div className="grid grid-cols-1 gap-8 text-right direction-rtl md:grid-cols-4">
            <div className="space-y-4">
              <div className="text-xl font-bold text-slate-900">
                <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                منصة تعليمية تهدف إلى تمكين العقول العربية بمهارات المستقبل من خلال تجربة
                تعليمية سلسة ومتميزة.
              </p>
            </div>
            <FooterColumn
              title="المنصة"
              links={['عن المعلم السائل', 'المدونة', 'Careers']}
            />
            <FooterColumn title="الدعم" links={['Help Center', 'Contact Us', 'Affiliate']} />
            <FooterColumn title="قانوني" links={['Privacy Policy', 'Terms of Service']} />
          </div>
          <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
            © 2026 ETQAN. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'checkout') {
    return (
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="grid grid-cols-1 gap-8 text-right direction-rtl md:grid-cols-4">
            <div>
              <div className="mb-4 text-xl font-bold text-slate-900">
                <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                منصة تعليمية تهدف إلى إثراء المحتوى العربي بلمسة عصرية وتجربة مستخدم لا مثيل
                لها.
              </p>
            </div>
            <FooterColumn title="الروابط السريعة" links={['عن المنصة', 'الأسئلة الشائعة', 'اتصل بنا']} />
            <FooterColumn title="قانوني" links={['سياسة الخصوصية', 'شروط الخدمة', 'مركز المساعدة']} />
            <div>
              <h4 className="mb-4 font-bold text-slate-900">اشترك في النشرة</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                />
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white">
                  انضم
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © 2026 ETQAN. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'course') {
    return (
      <footer className="w-full bg-slate-50 px-8 py-12 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-right text-sm leading-relaxed direction-rtl md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
              <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
            </div>
            <p className="text-slate-500">
              نحن منصة تعليمية تهدف إلى إعادة صياغة تجربة التعلم الرقمي بلمسة فنية وعمق معرفي.
            </p>
          </div>
          <FooterColumn title="الروابط السريعة" links={['Careers', 'Affiliate']} />
          <FooterColumn title="الدعم" links={['Help Center', 'Contact Us']} />
          <FooterColumn title="قانوني" links={['Privacy Policy', 'Terms of Service']} />
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200 pt-8 text-center text-slate-400 dark:border-slate-800">
          © 2026 ETQAN. All rights reserved.
        </div>
      </footer>
    )
  }

  if (variant === 'instructor') {
    return (
      <footer className="w-full border-t border-slate-200/50 bg-slate-50 px-8 py-12 dark:bg-slate-950">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 text-right direction-rtl md:grid-cols-4">
          <div className="space-y-6">
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
              <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              منصة تعليمية تهدف لإعادة تعريف تجربة التعلم الرقمي عبر أساليب عصرية ومحتوى عالي
              الجودة.
            </p>
          </div>
          <FooterColumn title="الروابط السريعة" links={['عن المنصة', 'قائمة المدرسين', 'برنامج الشركاء', 'الوظائف']} />
          <FooterColumn title="الدعم والمساعدة" links={['مركز المساعدة', 'سياسة الخصوصية', 'شروط الخدمة', 'اتصل بنا']} />
          <div className="space-y-6">
            <h4 className="font-bold dark:text-violet-400">اشترك في نشرتنا</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full rounded-2xl bg-white py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 dark:bg-slate-900"
              />
              <button className="absolute bottom-1.5 left-2 top-1.5 rounded-xl bg-primary px-4 text-xs font-bold text-on-primary">
                ارسال
              </button>
            </div>
            <div className="text-xs text-slate-400">© 2026 ETQAN. جميع الحقوق محفوظة.</div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="w-full bg-slate-50 px-8 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 text-right direction-rtl md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">
              <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
            </div>
            <p className="mb-6 text-slate-500 dark:text-slate-400">
              المنصة الرائدة في الشرق الأوسط للتعليم الرقمي الحديث والمحتوى التعليمي عالي الجودة.
            </p>
          </div>
          <FooterColumn title="المنصة" links={['Privacy Policy', 'Terms of Service', 'Help Center']} />
          <FooterColumn title="الشركة" links={['Contact Us', 'Careers', 'Affiliate']} />
          <div>
            <h4 className="mb-6 font-bold text-violet-700 dark:text-violet-400">النشرة الإخبارية</h4>
            <p className="mb-4 text-slate-500 dark:text-slate-400">
              اشترك ليصلك جديد الدورات والمقالات التقنية.
            </p>
            <div className="flex flex-row-reverse gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 rounded-xl bg-white p-3 text-right focus:ring-2 focus:ring-primary/20 dark:bg-slate-900"
              />
              <button className="rounded-xl bg-primary p-3 text-white hover:bg-primary-container">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row-reverse dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
             © 2026 All rights reserved. ETQAN. 
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400">صنع بشغف في العالم العربي</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-6 font-bold text-violet-700 dark:text-violet-400">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              className="text-sm text-slate-500 transition-colors duration-200 hover:text-violet-600 hover:underline underline-offset-4 dark:text-slate-400"
              href="#"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
