import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppState } from '../hooks/useAppState'
import { routes } from '../siteData'
import { BrandLogo } from './BrandLogo'

const navItems = [
  { label: 'الأصناف', key: 'courses', path: routes.courses.path },
  { label: 'تعلمي', key: 'dashboard', path: routes.dashboard.path },
  { label: 'المدربون', key: 'instructors', path: routes.instructor.path },
]

function inferActiveNav(pathname) {
  if (pathname.startsWith(routes.dashboard.path) || pathname.startsWith(routes.watch.path)) {
    return 'dashboard'
  }

  if (pathname.startsWith(routes.instructor.path)) {
    return 'instructors'
  }

  if (pathname.startsWith(routes.courses.path) || pathname.startsWith(routes.checkout.path)) {
    return 'courses'
  }

  return null
}

export function PublicTopNav({
  active,
  searchPlaceholder,
  maxWidth = 'max-w-8xl',
  progress = 'full',
  className = '',
}) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const {
    authUser,
    cartCount,
    wishlistCount,
    notifications,
    signOut,
  } = useAppState()
  const resolvedActive = active === undefined ? inferActiveNav(pathname) : active

  const handlePrimaryAction = () => {
    if (authUser) {
      navigate(routes.dashboard.path)
      return
    }

    navigate(routes.signUp.path)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b-2 border-transparent bg-white/85 shadow-[0px_12px_32px_rgba(28,25,45,0.06)] backdrop-blur-xl ${className}`}
    >
      <div
        className={`mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 ${maxWidth}`}
      >
        <div className="justify-self-start">
          <Link to={routes.home.path} className="inline-flex items-center">
            <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={
                item.key === resolvedActive
                  ? 'border-b-2 border-violet-600 pb-1 font-bold text-violet-800'
                  : 'text-slate-600 transition-all duration-300 hover:text-violet-600'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="justify-self-end">
          <div className="flex items-center gap-3 sm:gap-4">
            {searchPlaceholder ? (
              <div className="relative hidden lg:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-64 rounded-full bg-surface-container-high py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                />
              </div>
            ) : null}

            {authUser ? (
              <>
                <button
                  type="button"
                  onClick={() => navigate(routes.checkout.path)}
                  className="relative hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50 sm:inline-flex"
                  aria-label="cart"
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {cartCount ? (
                    <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-primary px-1.5 text-center text-xs font-bold text-white">
                      {cartCount}
                    </span>
                  ) : null}
                </button>

                <button
                  type="button"
                  onClick={() => navigate(routes.dashboard.path)}
                  className="relative hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50 sm:inline-flex"
                  aria-label="wishlist"
                >
                  <span className="material-symbols-outlined">favorite</span>
                  {wishlistCount ? (
                    <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-rose-500 px-1.5 text-center text-xs font-bold text-white">
                      {wishlistCount}
                    </span>
                  ) : null}
                </button>

                <button
                  type="button"
                  onClick={() => navigate(routes.dashboard.path)}
                  className="relative hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50 sm:inline-flex"
                  aria-label="notifications"
                >
                  <span className="material-symbols-outlined">notifications</span>
                  {notifications ? (
                    <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-secondary px-1.5 text-center text-xs font-bold text-slate-950">
                      {notifications}
                    </span>
                  ) : null}
                </button>
              </>
            ) : null}

            {authUser ? (
              <>
                <button
                  type="button"
                  onClick={() => navigate(routes.dashboard.path)}
                  className="hidden rounded-xl px-4 py-2 font-bold text-primary transition-all duration-200 hover:bg-violet-50 sm:block"
                >
                  {authUser.name}
                </button>
                <button
                  type="button"
                  onClick={signOut}
                  className="hidden rounded-xl border border-primary/10 px-4 py-2 font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 sm:block"
                >
                  خروج
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate(routes.signIn.path)}
                  className="hidden rounded-xl px-6 py-2.5 font-bold text-primary transition-all duration-200 hover:bg-violet-50 sm:block"
                >
                  تسجيل الدخول
                </button>
                <button
                  type="button"
                  onClick={handlePrimaryAction}
                  className="rounded-xl bg-linear-to-r from-primary to-primary-container px-6 py-2.5 font-bold text-on-primary transition-all duration-200 hover:scale-95 active:scale-90"
                >
                  اشترك مجاناً
                </button>
              </>
            )}

            <button
              type="button"
              className="p-2 text-on-surface md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="menu"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={
                  item.key === resolvedActive
                    ? 'rounded-xl bg-violet-50 px-3 py-2 font-bold text-violet-700'
                    : 'rounded-xl px-3 py-2 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700'
                }
              >
                {item.label}
              </Link>
            ))}
            {authUser ? (
              <div className="grid grid-cols-3 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    navigate(routes.checkout.path)
                  }}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  السلة ({cartCount})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    navigate(routes.dashboard.path)
                  }}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  المفضلة ({wishlistCount})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    navigate(routes.dashboard.path)
                  }}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  التنبيهات ({notifications})
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className={`h-0.5 bg-linear-to-r from-primary via-secondary to-tertiary opacity-40 ${
          progress === 'third' ? 'w-1/3' : 'w-full'
        }`}
      />
    </header>
  )
}
