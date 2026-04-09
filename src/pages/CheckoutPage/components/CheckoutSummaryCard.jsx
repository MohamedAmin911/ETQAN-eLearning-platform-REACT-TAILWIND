export function CheckoutSummaryCard({ cartCourses, cartTotal, originalTotal, savings }) {
  return (
    <div className="sticky top-28 rounded-xl border border-primary/5 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(28,25,45,0.06)]">
      <h2 className="mb-8 text-xl font-bold">تفاصيل السعر</h2>
      <div className="mb-10 space-y-4">
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>السعر الأصلي</span>
          <span className="font-headline font-semibold">{originalTotal} ر.س</span>
        </div>
        <div className="flex items-center justify-between font-bold text-secondary">
          <span>خصم المنصة</span>
          <span className="font-headline">- {savings} ر.س</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>ضريبة القيمة المضافة</span>
          <span className="font-headline">0 ر.س</span>
        </div>
        <div className="mt-4 border-t border-surface-container-low pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">المجموع الكلي</span>
            <span className="font-headline text-3xl font-black text-primary">{cartTotal} ر.س</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-primary to-primary-container py-5 text-xl font-bold text-on-primary shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50" disabled={!cartCourses.length}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
          ادفع الآن
        </button>
        <p className="text-center text-xs leading-relaxed text-on-surface-variant">
          بالضغط على "ادفع الآن"، فإنك توافق على <a className="text-primary underline" href="#">شروط الخدمة</a> و <a className="text-primary underline" href="#">سياسة الخصوصية</a> الخاصة بـ ETQAN.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-2 opacity-40 grayscale">
        <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">VISA</div>
        <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">MASTERCARD</div>
        <div className="flex h-8 items-center justify-center rounded bg-surface-container text-[10px] font-bold">MADA</div>
      </div>
    </div>
  )
}
