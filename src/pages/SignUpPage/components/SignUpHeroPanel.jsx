export function SignUpHeroPanel() {
  return (
    <section className="custom-gradient-bg relative hidden overflow-hidden p-12 text-white md:flex md:w-1/2 md:flex-col md:items-center md:justify-between">
      <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-tertiary/20 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col items-center justify-start px-20 text-center">
        <div className="relative w-full max-w-lg">
          <div className="absolute -inset-4 rounded-xl bg-white/30 blur-2xl" />
          <img
            alt="Abstract flowing liquid art representing knowledge"
            className="relative z-20 h-auto w-auto -rotate-3 scale-80 rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-0"
            src="https://plus.unsplash.com/premium_vector-1721627581237-0bdf5f61b4bf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h2 className="mb-6 text-4xl font-extrabold leading-tight">
          انضم إلى أكثر من 150 ألف متعلم
        </h2>
        <p className="mt-30 text-lg font-light leading-relaxed text-on-primary-container opacity-90">
          اكتشف مساراً تعليمياً مخصصاً يجمع بين الأصالة والحداثة في بيئة رقمية ملهمة.
        </p>
      </div>

      <div className="z-10 w-full text-center text-sm opacity-60">
        © 2026 Etqan. جميع الحقوق محفوظة.
      </div>
    </section>
  )
}
