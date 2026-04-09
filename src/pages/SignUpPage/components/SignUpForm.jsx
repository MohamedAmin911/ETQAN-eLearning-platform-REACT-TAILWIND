export function SignUpForm({
  form,
  errors,
  onChange,
  onSubmit,
  onOpenSignIn,
}) {
  return (
    <>
      <div className="mb-10 text-right">
        <h1 className="mb-2 text-3xl font-extrabold text-on-surface">ابدأ رحلتك اليوم</h1>
        <p className="text-on-surface-variant">
          أدخل تفاصيلك لإنشاء حساب جديد والبدء في التعلم.
        </p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="space-y-2 text-right">
          <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="name">
            الاسم الكامل
          </label>
          <div className="relative">
            <input
              className="w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
              id="name"
              name="name"
              placeholder="أدخل اسمك الكامل"
              type="text"
              value={form.name}
              onChange={onChange}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
              person
            </span>
          </div>
          {errors.name ? <p className="text-sm font-medium text-red-500">{errors.name}</p> : null}
        </div>

        <div className="space-y-2 text-right">
          <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="email">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <input
              className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-4 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
              id="email"
              name="email"
              placeholder="example@domain.com"
              type="email"
              value={form.email}
              onChange={onChange}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
              mail
            </span>
          </div>
          {errors.email ? <p className="text-sm font-medium text-red-500">{errors.email}</p> : null}
        </div>

        <div className="space-y-2 text-right">
          <label className="mr-1 text-sm font-bold text-on-surface-variant" htmlFor="password">
            كلمة المرور
          </label>
          <div className="relative">
            <input
              className="dir-ltr w-full rounded-2xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-left text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              value={form.password}
              onChange={onChange}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
              lock
            </span>
          </div>
          <p className="mr-1 mt-1 text-[10px] text-outline-variant">
            يجب أن تتكون من 8 أحرف على الأقل.
          </p>
          {errors.password ? <p className="text-sm font-medium text-red-500">{errors.password}</p> : null}
        </div>

        <div className="relative mb-8 flex items-center">
          <div className="grow border-t border-surface-container-highest" />
          <span className="mx-4 shrink text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            او
          </span>
          <div className="grow border-t border-surface-container-highest" />
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <button
            className="group flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container-lowest px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-primary/10"
            type="button"
          >
            <img
              alt="Google Logo"
              className="h-5 w-5"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEVHcEz/RkL/R0D+SEr/RUD/RkOwjlb/SD7/SE3/SUj/Vzb/VDf9TFb8TVeHoFb/YTD/byn8TVn/jRr/fSL/mxL/SEj+yQn/ohH/tQv+VUb/vQn/wwn+zgj9wQm3xQ39zgT6zQYwhv/7zgowhv8uhv0ek+Avhv7yzAPjywIvhv0whv7PyQHUygIth/y3yAEnivSlxwGSxgUak94fj+h5xAlgwxMLqp8NnsQVlte6xwBNwh45wC0xwDMLt28IrJgJpa0kjPCaxQEpvzsevkkWvVANumQQu18JtXkIsIgTvVYOvGALuWtJwh4OvF8OvF9ccfxCAAAAT3RSTlMAUZvT7P8T//+wiv//kAv6/mD//+V2jv//JKf//0EmxOr/rP7+MEX//x10/6eu//3+/9v///7I//+K//+KS/3/YeX//7dsnv7/////5s3tMAqBMAAAAXFJREFUeAF0jUUCwCAMwDp3d/f9/4krnVt6goQCFzheECVJFHgOPpB5RZHYIKqqyU+vGwpCXkVM07pp2zEQ8hSYiCBf1rsuFrQCvaSahHe+9wMqWHJuOD2E/lYoWsRxkUbBxcdJshY6bEQ3L6fpWmTnXXbxkBcpJTb8UBZFgUX156uyLLHI4Y+YgqL+DZqS0R7n7o4NLQX9GQwbI5tugpKI7wF5Rjd/BiNCCQZfX5BfCwyWrsnagGEYiKKpMkLqgJmZmXn/caKTzGoM7+v4IEiWPQdJ4fMhFujHCzjH7Wny6xFwMB9UKBa4KN3Tl4kh9AZYVJRbpXhVVRGX0asEXNP1a7MM0wQJA+0WFcQtyz7bcFzPAwn+8AkPwmjDcZK6WJGR75zwsCirOo7rpu0SojC2oQUeIF72/TCMY4sUKSj2wX9iXgAHwYgEoKBPizOBgx4EhwnCtxOtDnYTzn1Gnw3wzYQT3zDJrpmXYVjmpj7d/gPknlJE6eZSewAAAABJRU5ErkJggg=="
            />
            <span className="text-sm font-semibold text-on-surface">Google</span>
          </button>

          <button
            className="group flex items-center justify-center gap-3 rounded-xl border-2 border-transparent bg-surface-container-lowest px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-primary/10"
            type="button"
          >
            <img
              alt="Apple Logo"
              className="h-5 w-5"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4Aa1XQ3hkQRjc+ynX2OZtbfu+tm3b1nlt27a9O4qNS5xxbdd+cTKvXydT31fJoPuvmvf6/ejw86dBlX6CwwQXCq6t5cLaz/xV4+ld6F8r9NdgsCAjIwf5+UUoLCwBydf8jN+JNQbBddzjDQM+gocErRSyWm2QgWu4lntq9/q01UAfwYKCgmK43W6ognu4lzEE+6oamCboLC0tR3vBGIwlOF2vgZm5uQWoqamBXrhcLpw5cxZ79uxFKxCxrGBMxpYZ6Eu33KAXNDp+/AQEBgbzv8Y6Kxi7+e1ofuAKVS/7zp27KE7i6dNnem5HAbVaM3CYh0YF/PWRkdEUpxHoQe3BPNTcQJCgTc9pT0tLh8VigdPpBLFv3368evVKBC7A16/fkJmZKX06qCXo39jAej67Wnjx4iVGjBiJ0NBwBAeHYsCAgTh48BCuXLmCKVOmIioqBrwS4eGRGDduPMxmMzyBWtRsbMCglWSePXuOkJAwCuhmnz79YLVaPSUrGjDWGQhgCvWEyspKdOrURUk8JiYO799/0Exg1KQ2DQxjHveEO3fuKomTPBcyUJPaNLCQxcQTNm3arGzAYDBABmoK7UU0sE7rAC5dukxJPCgoRPy6DMhATWpLDWzbtl35Cty//0DBgOQW3LhxU9nAsGEj4HA4dN0CySHkwvy6bKfECRMmISsrS34IZY8hMXnyFAZV5rFjx6WPoa5E9PnzZ2XxpKQUlJaWaiUik1IqXrBgkZKB06fPwBOKiv4fwA3Ni5FdK3NVVFSgd+++usRnzJilXIzII7JynJOTAxaa7t17Yt68+bh37z6+fPmKCxcuYvToMejVqzdWrVrNMi0rx4cVGxIFKDQkCi2ZAhRaMklTavWqeF6epCltxuneasvLyurb8lmqg0lfLw4m/dozmh0RtBUV6R/NuJZ7avf6eGs4ZeIwMoVmZrYcTvkZv+MarlUZTlUZIDi8diRfX8uFtZ8FqMb7Bx+2VJbBTrlcAAAAAElFTkSuQmCC"
            />
            <span className="text-sm font-semibold text-on-surface">Apple</span>
          </button>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-3 py-2 text-right">
            <input
              className="h-5 w-5 cursor-pointer rounded-lg border-surface-variant text-primary focus:ring-primary/20"
              id="terms"
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={onChange}
            />
            <span className="cursor-pointer text-xs leading-relaxed text-on-surface-variant">
              أوافق على شروط الخدمة وسياسة الخصوصية.
            </span>
          </label>
          {errors.terms ? <p className="text-sm font-medium text-red-500">{errors.terms}</p> : null}
        </div>

        <button
          className="w-full rounded-2xl bg-primary-container py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:bg-primary active:scale-[0.98]"
          type="submit"
        >
          إنشاء حساب
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-sm text-on-surface-variant">
          لديك حساب بالفعل؟
          <button
            type="button"
            onClick={onOpenSignIn}
            className="mr-1 font-extrabold text-primary transition-colors hover:text-tertiary"
          >
            تسجيل الدخول
          </button>
        </p>
      </div>
    </>
  )
}
