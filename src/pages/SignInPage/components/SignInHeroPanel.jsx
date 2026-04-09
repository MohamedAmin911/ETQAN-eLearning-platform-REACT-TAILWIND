export function SignInHeroPanel() {
  return (
    <section className="relative hidden overflow-hidden bg-linear-to-br from-primary via-primary-container to-tertiary lg:flex lg:w-1/2">
      <div className="absolute right-[-10%] top-[-10%] h-150 w-150 rounded-full bg-secondary/20 blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] h-100 w-100 rounded-full bg-tertiary/30 blur-[80px]" />

      <div className="relative z-10 flex w-full flex-col items-center justify-start px-20 text-center">
        <div className="relative mt-11 w-full max-w-lg">
          <div className="absolute -inset-4 rounded-xl bg-white/30 blur-2xl" />
          <img
            alt="Abstract flowing liquid art representing knowledge"
            className="relative z-20 h-auto w-auto -rotate-3 scale-80 rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-0"
            src="https://plus.unsplash.com/premium_vector-1712873279566-379ba42df159?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="mb-6 font-headline text-5xl font-extrabold leading-tight text-white">
          انطلق في رحلة
          <br />
          <span className="text-white">النجاح</span>
        </h1>
      </div>
    </section>
  )
}
