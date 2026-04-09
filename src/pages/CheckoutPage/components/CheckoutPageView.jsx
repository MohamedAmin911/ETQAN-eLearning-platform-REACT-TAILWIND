import { PublicTopNav } from '../../../components/PublicTopNav'
import { SiteFooter } from '../../../components/SiteFooter'
import { instructors } from '../../../data/instructors'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { CheckoutHeader } from './CheckoutHeader'
import { CheckoutSummaryCard } from './CheckoutSummaryCard'
import { OrderSummarySection } from './OrderSummarySection'
import { PaymentMethodSection } from './PaymentMethodSection'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.direction-rtl { direction: rtl; }
body { font-family: 'Tajawal', sans-serif; }`

export function CheckoutPage() {
  usePageSetup('CheckoutPage')

  const { cartCourses, cartTotal, removeFromCart } = useAppState()
  const instructorById = Object.fromEntries(instructors.map((instructor) => [instructor.id, instructor]))
  const originalTotal = cartCourses.reduce((sum, course) => sum + (course.originalPrice || course.price), 0)
  const savings = Math.max(0, originalTotal - cartTotal)

  return (
    <>
      <style>{pageStyles}</style>
      <div>
        <PublicTopNav active="courses" maxWidth="max-w-7xl" className="border-primary/10" />
        <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
          <CheckoutHeader />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <OrderSummarySection
                cartCourses={cartCourses}
                instructorById={instructorById}
                onRemoveFromCart={removeFromCart}
              />
              <PaymentMethodSection />
            </div>
            <div className="lg:col-span-4">
              <CheckoutSummaryCard
                cartCourses={cartCourses}
                cartTotal={cartTotal}
                originalTotal={originalTotal}
                savings={savings}
              />
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
