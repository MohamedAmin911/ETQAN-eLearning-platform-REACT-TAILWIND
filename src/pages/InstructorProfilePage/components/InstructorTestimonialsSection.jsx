export function InstructorTestimonialsSection({ testimonials }) {
  return (
    <div className="space-y-8">
      <h2 className="font-headline text-3xl font-bold">قالوا عن المحاضر</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="space-y-4 rounded-3xl bg-surface-container-highest/30 p-8">
            <div>
              <div className="font-bold text-on-surface">{testimonial.name}</div>
              <div className="text-xs font-medium text-outline">{testimonial.role}</div>
            </div>
            <p className="text-sm italic leading-relaxed text-on-surface-variant">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
