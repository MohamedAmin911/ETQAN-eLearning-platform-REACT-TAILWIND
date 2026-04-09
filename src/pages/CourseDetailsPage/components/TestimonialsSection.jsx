export function TestimonialsSection({ testimonials }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-2xl font-bold">آراء المتعلمين</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((review) => (
          <div key={review.name} className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed font-bold text-on-secondary-fixed">{review.name[0]}</div>
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <div className="flex text-secondary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${review.name}-${index}`} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: index < review.rating ? '"FILL" 1' : '"FILL" 0' }}>star</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
