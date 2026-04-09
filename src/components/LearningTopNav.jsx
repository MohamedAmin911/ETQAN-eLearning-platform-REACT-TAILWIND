import { Link, useNavigate } from 'react-router-dom'
import { useAppState } from '../hooks/useAppState'
import { routes } from '../siteData'
import { BrandLogo } from './BrandLogo'

export function LearningTopNav() {
  const navigate = useNavigate()
  const { authUser, cartCount, notifications } = useAppState()

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-primary-container bg-white/80 px-8 shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-6">
        <Link
          to={routes.home.path}
          className="bg-linear-to-r from-violet-800 to-fuchsia-600 bg-clip-text text-2xl font-bold text-transparent"
        >
          <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link className="text-slate-600 transition-colors hover:text-violet-600" to={routes.home.path}>
            الرئيسية
          </Link>
          <Link className="border-b-2 border-violet-600 font-bold text-violet-900" to={routes.watch.path}>
            مساراتي
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-violet-600" to={routes.courses.path}>
            المكتبة
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {authUser ? (
          <>
            <button
              type="button"
              onClick={() => navigate(routes.dashboard.path)}
              className="relative rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50"
            >
              <span className="material-symbols-outlined">notifications</span>
              {notifications ? (
                <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-secondary px-1.5 text-center text-xs font-bold text-slate-950">
                  {notifications}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => navigate(routes.checkout.path)}
              className="relative rounded-full p-2 text-slate-600 transition-colors hover:bg-violet-50"
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
              className="flex h-10 min-w-10 items-center justify-center overflow-hidden rounded-full border-2 border-primary-container bg-violet-50 px-3 text-sm font-bold text-primary"
            >
              {authUser.name.slice(0, 1)}
            </button>
          </>
        ) : null}
      </div>

      <div className="absolute bottom-0 right-0 h-0.5 w-[65%] bg-linear-to-l from-primary to-tertiary" />
    </nav>
  )
}
