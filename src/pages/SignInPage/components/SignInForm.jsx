export function SignInForm({
  form,
  errors,
  onChange,
  onSubmit,
  onOpenSignUp,
}) {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-3 font-headline text-4xl font-extrabold text-on-surface">
          مرحباً بك مجدداً
        </h2>
        <p className="text-lg text-on-surface-variant">
          أدخل بياناتك للوصول إلى لوحة التعلم الخاصة بك.
        </p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="group relative">
          <input
            className={`peer w-full rounded-xl border-none bg-surface-container-high px-5 py-4 text-on-surface placeholder-transparent transition-all duration-300 focus:ring-4 ${
              errors.email ? 'focus:ring-red-200' : 'focus:ring-primary/10'
            }`}
            id="email"
            name="email"
            placeholder=" "
            type="email"
            value={form.email}
            onChange={onChange}
          />
          <label
            className="pointer-events-none absolute right-5 top-4 origin-right text-on-surface-variant transition-all duration-300"
            htmlFor="email"
          >
            البريد الإلكتروني
          </label>
          {errors.email ? <p className="mt-2 text-sm font-medium text-red-500">{errors.email}</p> : null}
        </div>

        <div className="group relative">
          <input
            className={`peer w-full rounded-xl border-none bg-surface-container-high px-5 py-4 text-on-surface placeholder-transparent transition-all duration-300 focus:ring-4 ${
              errors.password ? 'focus:ring-red-200' : 'focus:ring-primary/10'
            }`}
            id="password"
            name="password"
            placeholder=" "
            type="password"
            value={form.password}
            onChange={onChange}
          />
          <label
            className="pointer-events-none absolute right-5 top-4 origin-right text-on-surface-variant transition-all duration-300"
            htmlFor="password"
          >
            كلمة المرور
          </label>
          <button
            className="absolute left-4 top-4 text-on-surface-variant transition-colors hover:text-primary"
            type="button"
          >
            <span className="material-symbols-outlined">visibility</span>
          </button>
          {errors.password ? <p className="mt-2 text-sm font-medium text-red-500">{errors.password}</p> : null}
        </div>

        <div className="flex items-center justify-between">
          <label className="group flex cursor-pointer items-center gap-2">
            <input
              className="h-5 w-5 rounded-lg border-none bg-surface-container-high text-primary transition-all focus:ring-primary/20 focus:ring-offset-0"
              type="checkbox"
            />
            <span className="text-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
              تذكرني
            </span>
          </label>

          <button
            className="text-sm font-bold text-primary transition-colors hover:text-primary-container"
            type="button"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <button
          className="w-full rounded-xl bg-linear-to-r from-primary to-primary-container py-4 text-lg font-bold text-white shadow-[0px_12px_32px_rgba(66,40,173,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_16px_40px_rgba(66,40,173,0.3)] active:scale-[0.98]"
          type="submit"
        >
          تسجيل الدخول
        </button>
      </form>

      <p className="mt-10 text-center text-on-surface-variant">
        ليس لديك حساب؟
        <button
          type="button"
          onClick={onOpenSignUp}
          className="ms-2 font-bold text-primary transition-all decoration-2 decoration-primary/30 underline-offset-4 hover:underline"
        >
          إنشاء حساب جديد
        </button>
      </p>
    </>
  )
}
