export function PaymentMethodSection() {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.04)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
          account_balance_wallet
        </span>
        <h2 className="text-2xl font-bold">طريقة الدفع</h2>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-primary bg-primary/5 p-4 transition-all">
          <span className="material-symbols-outlined text-3xl text-primary">credit_card</span>
          <span className="font-bold text-primary">بطاقة ائتمان</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-transparent bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">payments</span>
          <span className="font-bold text-on-surface-variant">بايبال</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-transparent bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">ios</span>
          <span className="font-bold text-on-surface-variant">أبل باي</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="mb-2 block text-sm font-bold text-on-surface">الاسم على البطاقة</label>
            <input className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-right outline-none focus:ring-2 focus:ring-primary/20" placeholder="الاسم الكامل كما يظهر على البطاقة" type="text" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-on-surface">رقم البطاقة</label>
            <div className="relative">
              <input className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-left font-headline outline-none focus:ring-2 focus:ring-primary/20" dir="ltr" placeholder="0000 0000 0000 0000" type="text" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-on-surface">تاريخ الانتهاء</label>
              <input className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-center font-headline outline-none focus:ring-2 focus:ring-primary/20" dir="ltr" placeholder="MM / YY" type="text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-on-surface">رمز التحقق (CVV)</label>
              <input className="w-full rounded-xl border-none bg-surface-container-high px-4 py-4 text-center font-headline outline-none focus:ring-2 focus:ring-primary/20" dir="ltr" placeholder="123" type="text" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-surface-container-low p-4 text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-primary">security</span>
          <p>جميع معاملاتك مشفرة بالكامل وآمنة 100%. نحن لا نقوم بتخزين تفاصيل بطاقتك.</p>
        </div>
      </div>
    </section>
  )
}
