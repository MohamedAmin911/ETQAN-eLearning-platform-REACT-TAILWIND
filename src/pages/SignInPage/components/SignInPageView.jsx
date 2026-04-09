import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthFooter } from '../../../components/AuthFooter'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { routes } from '../../../siteData'
import { SignInForm } from './SignInForm'
import { SignInHeroPanel } from './SignInHeroPanel'
import { SignInLogoHeader } from './SignInLogoHeader'
import { SignInSocialButtons } from './SignInSocialButtons'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
}
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  transform: translateY(-1.5rem) scale(0.85);
  color: #4228ad;
}`

export function SignInPage() {
  usePageSetup('SignInPage')

  const navigate = useNavigate()
  const { signIn } = useAppState()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

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

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    signIn(form.email.trim())
    navigate(routes.dashboard.path)
  }

  return (
    <>
      <style>{pageStyles}</style>

      <main className="flex min-h-screen">
        <SignInHeroPanel />

        <section className="relative flex w-full flex-col bg-surface lg:w-1/2">
          <SignInLogoHeader />

          <div className="flex flex-1 items-center justify-center p-8 md:p-16 lg:p-24">
            <div className="w-full max-w-md">
              <SignInSocialButtons />
              <SignInForm
                form={form}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onOpenSignUp={() => navigate(routes.signUp.path)}
              />
            </div>
          </div>

          <AuthFooter />
        </section>
      </main>
    </>
  )
}
