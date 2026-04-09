import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { routes } from '../../../siteData'
import { SignUpForm } from './SignUpForm'
import { SignUpHeroPanel } from './SignUpHeroPanel'
import { SignUpLogoHeader } from './SignUpLogoHeader'

const pageStyles = `body {
  font-family: 'Tajawal', 'Plus Jakarta Sans', sans-serif;
  background-color: #fdf8ff;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.custom-gradient-bg {
  background: linear-gradient(135deg, #5a45c6 0%, #d1688c 100%);
}`

export function SignUpPage() {
  usePageSetup('SignUpPage')

  const navigate = useNavigate()
  const { signUp } = useAppState()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'أدخل الاسم الكامل.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'أدخل البريد الإلكتروني.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'أدخل كلمة المرور.'
    } else if (form.password.trim().length < 8) {
      nextErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل.'
    }

    if (!form.terms) {
      nextErrors.terms = 'يجب الموافقة على الشروط والمتابعة.'
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    signUp({
      name: form.name.trim(),
      email: form.email.trim(),
    })
    navigate(routes.signIn.path)
  }

  return (
    <>
      <style>{pageStyles}</style>

      <main className="flex min-h-screen flex-col md:flex-row-reverse">
        <SignUpHeroPanel />

        <section className="flex w-full items-center justify-center bg-white p-6 md:w-1/2 md:p-12">
          <div className="w-full max-w-md">
            <SignUpLogoHeader />
            <SignUpForm
              form={form}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onOpenSignIn={() => navigate(routes.signIn.path)}
            />
          </div>
        </section>
      </main>
    </>
  )
}
