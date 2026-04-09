import { Link, Navigate } from 'react-router-dom'
import { LearningTopNav } from '../../../components/LearningTopNav'
import { SiteFooter } from '../../../components/SiteFooter'
import { BrandLogo } from '../../../components/BrandLogo'
import { useAppState } from '../../../hooks/useAppState'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { routes } from '../../../siteData'
import { PublicTopNav } from '../../../components/PublicTopNav'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
body {
  font-family: 'Tajawal', 'Be Vietnam Pro', sans-serif;
}`

const activityDays = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']

function parseHours(duration) {
  const match = duration?.match(/\d+/)
  return match ? Number(match[0]) : 0
}

function buildWeeklyActivity(seed, enrolledCount) {
  return activityDays.map((day, index) => {
    const base = 38 + enrolledCount * 10 + ((seed + index * 11) % 45)
    const minutes = index === 2 || index === 5 ? base + 18 : base

    return {
      day,
      minutes,
      hours: (minutes / 60).toFixed(1),
      lessons: Math.max(1, Math.round(minutes / 32)),
      focus: ['تطبيق', 'مراجعة', 'مشاهدة', 'مشروع'][index % 4],
    }
  })
}

function buildProgress(course, index, seed) {
  const progress = Math.min(92, 24 + ((seed + index * 17) % 58))
  const completedLessons = Math.max(1, Math.round((course.lessons * progress) / 100))
  const nextLesson =
    course.curriculum?.flatMap((module) => module.lessons || []).find((lesson) => lesson.id)?.title ??
    'متابعة الدرس التالي'

  return {
    ...course,
    progress,
    completedLessons,
    nextLesson,
    ringOffset: (125.6 * (100 - progress)) / 100,
    accentClass: ['text-primary', 'text-secondary', 'text-tertiary'][index % 3],
    buttonClass: ['bg-primary/8 text-primary', 'bg-secondary/8 text-secondary', 'bg-tertiary/8 text-tertiary'][
      index % 3
    ],
  }
}

function buildRecentItems(courses, seed) {
  return courses.slice(0, 3).map((course, index) => ({
    id: course.id,
    title: course.title,
    course: course.category === 'development' ? 'مسار البرمجة' : course.category === 'design' ? 'مسار التصميم' : 'مسار الأعمال',
    progressWidth: `${Math.min(100, 30 + ((seed + index * 13) % 55))}%`,
    accentClass: ['bg-primary', 'bg-secondary', 'bg-tertiary'][index % 3],
    image: course.image,
  }))
}

function buildNotificationItems({ authUser, cartCount, wishlistCount, notifications, enrolledCount }) {
  const items = [
    {
      title: `مرحباً ${authUser.name}`,
      body: `تم تفعيل حسابك باستخدام البريد ${authUser.email}.`,
      time: 'الآن',
      dot: 'bg-primary',
    },
    {
      title: 'حالة التعلم الحالية',
      body: `لديك ${enrolledCount} دورة نشطة و ${cartCount} عنصر في السلة.`,
      time: 'اليوم',
      dot: 'bg-secondary',
    },
    {
      title: 'قائمة المفضلة',
      body: `قمت بحفظ ${wishlistCount} عناصر للعودة إليها لاحقاً.`,
      time: 'هذا الأسبوع',
      dot: 'bg-tertiary',
    },
  ]

  return items.slice(0, Math.max(1, Math.min(items.length, notifications || 1)))
}

export function DashboardPage() {
  usePageSetup('DashboardPage')

  const { authUser, enrolledCourses, cartCourses, wishlistCourses, notifications } = useAppState()

  if (!authUser) {
    return <Navigate to={routes.signIn.path} replace />
  }

  const seed = authUser.email.length + authUser.name.length * 3 + enrolledCourses.length * 7
  const weeklyLearningActivity = buildWeeklyActivity(seed, enrolledCourses.length)
  const totalWeeklyMinutes = weeklyLearningActivity.reduce((sum, day) => sum + day.minutes, 0)
  const totalWeeklyHours = (totalWeeklyMinutes / 60).toFixed(1)
  const topDay = weeklyLearningActivity.reduce((best, day) => (day.minutes > best.minutes ? day : best))
  const averageMinutes = Math.round(totalWeeklyMinutes / weeklyLearningActivity.length)
  const weeklyGoalMinutes = Math.max(360, enrolledCourses.length * 180)
  const goalCompletion = Math.min(100, Math.round((totalWeeklyMinutes / weeklyGoalMinutes) * 100))
  const maxMinutes = Math.max(...weeklyLearningActivity.map((day) => day.minutes))
  const totalCourseHours = enrolledCourses.reduce((sum, course) => sum + parseHours(course.duration), 0)
  const certificatesCount = Math.max(0, Math.floor(enrolledCourses.length / 2))
  const streakDays = Math.min(14, 3 + enrolledCourses.length * 2 + (wishlistCourses.length ? 1 : 0))
  const completedCoursesCount = Math.max(0, enrolledCourses.length - 1)
  const activeCourses = enrolledCourses.map((course, index) => buildProgress(course, index, seed))
  const recentItems = buildRecentItems([...enrolledCourses, ...cartCourses, ...wishlistCourses], seed)
  const notificationItems = buildNotificationItems({
    authUser,
    cartCount: cartCourses.length,
    wishlistCount: wishlistCourses.length,
    notifications,
    enrolledCount: enrolledCourses.length,
  })

  return (
    <>
      <style>{pageStyles}</style>

      <div className="min-h-screen bg-surface">
        <PublicTopNav />

        <main className="mx-auto mt-7 max-w-7xl px-6 pb-16 pt-28">
          <section className="mb-8 rounded-4xl bg-linear-to-l from-primary/7 via-white to-secondary/6 p-8 shadow-[0_24px_64px_-42px_rgba(66,40,173,0.35)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-right">
                <p className="mb-2 text-sm font-semibold text-primary">لوحة التعلم الشخصية</p>
                <h1 className="text-3xl font-black text-on-surface">أهلاً {authUser.name}</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-on-surface-variant">
                  هذه اللوحة مبنية على بيانات حسابك الحالي، وتعرض تقدمك في الدورات، عناصر السلة، والمفضلة
                  والنشاط الأسبوعي بشكل مباشر.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                    {authUser.name.slice(0, 1)}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-on-surface">{authUser.name}</p>
                    <p className="text-sm text-on-surface-variant">{authUser.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-30px_rgba(66,40,173,0.28)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <p className="text-sm text-on-surface-variant">ساعات التعلم النشطة</p>
              <p className="mt-2 text-3xl font-black text-on-surface">{totalCourseHours || 0}</p>
              <p className="mt-1 text-sm text-on-surface-variant">مأخوذة من الدورات الملتحق بها</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-30px_rgba(133,74,121,0.24)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <p className="text-sm text-on-surface-variant">الدورات النشطة</p>
              <p className="mt-2 text-3xl font-black text-on-surface">{enrolledCourses.length}</p>
              <p className="mt-1 text-sm text-on-surface-variant">{completedCoursesCount} مكتملة حتى الآن</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-30px_rgba(122,34,70,0.22)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary/10 text-tertiary">
                <span className="material-symbols-outlined">military_tech</span>
              </div>
              <p className="text-sm text-on-surface-variant">الشهادات المتوقعة</p>
              <p className="mt-2 text-3xl font-black text-on-surface">{certificatesCount}</p>
              <p className="mt-1 text-sm text-on-surface-variant">ترتبط بعدد المسارات التي أنهيتها</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-30px_rgba(28,25,45,0.16)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container text-on-surface-variant">
                <span className="material-symbols-outlined">local_fire_department</span>
              </div>
              <p className="text-sm text-on-surface-variant">سلسلة الإنجاز</p>
              <p className="mt-2 text-3xl font-black text-on-surface">{streakDays}</p>
              <p className="mt-1 text-sm text-on-surface-variant">مرتبطة باستمرارية نشاطك الحالي</p>
            </div>
          </section>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <section className="rounded-4xl bg-white p-8 shadow-[0_24px_64px_-44px_rgba(28,25,45,0.2)]">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-xl font-black text-on-surface">نشاط التعلم الأسبوعي</h2>
                  <span className="rounded-full bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface-variant">
                    آخر 7 أيام
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
                  <div>
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl bg-surface-container-low p-4 text-right">
                        <p className="text-xs text-on-surface-variant">إجمالي التعلم</p>
                        <p className="mt-2 text-2xl font-black text-on-surface">{totalWeeklyHours} ساعة</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-4 text-right">
                        <p className="text-xs text-on-surface-variant">أفضل يوم</p>
                        <p className="mt-2 text-2xl font-black text-primary">{topDay.day}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-4 text-right">
                        <p className="text-xs text-on-surface-variant">متوسط يومي</p>
                        <p className="mt-2 text-2xl font-black text-on-surface">{averageMinutes} دقيقة</p>
                      </div>
                    </div>

                    <div className="flex h-60 items-end justify-between gap-3">
                      {weeklyLearningActivity.map((day) => {
                        const height = `${Math.max(18, Math.round((day.minutes / maxMinutes) * 100))}%`
                        const isTopDay = day.day === topDay.day

                        return (
                          <div key={day.day} className="flex flex-1 flex-col items-center gap-3">
                            <div className="text-[11px] font-bold text-on-surface">{day.hours} س</div>
                            <div className="flex h-full w-full items-end">
                              <div
                                className={`w-full rounded-t-3xl transition-all duration-300 ${
                                  isTopDay ? 'bg-primary shadow-lg shadow-primary/25' : 'bg-surface-container-high'
                                }`}
                                style={{ height }}
                              />
                            </div>
                            <div className="text-center">
                              <div className={`text-xs ${isTopDay ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>
                                {day.day}
                              </div>
                              <div className="text-[10px] text-on-surface-variant">{day.lessons} دروس</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-primary/6 p-4 text-right">
                      <p className="text-xs text-on-surface-variant">الهدف الأسبوعي</p>
                      <p className="mt-2 text-3xl font-black text-primary">{goalCompletion}%</p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${goalCompletion}%` }} />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-surface-container-low p-4 text-right">
                      <p className="text-xs text-on-surface-variant">جلسة الذروة</p>
                      <p className="mt-2 text-lg font-bold text-on-surface">
                        {topDay.focus} يوم {topDay.day}
                      </p>
                      <p className="mt-1 text-xs text-on-surface-variant">{topDay.minutes} دقيقة في أعلى نشاط</p>
                    </div>

                    <div className="rounded-2xl bg-surface-container-low p-4 text-right">
                      <p className="text-xs text-on-surface-variant">قوة الحساب الحالية</p>
                      <p className="mt-2 text-lg font-bold text-on-surface">{wishlistCourses.length} مفضلة محفوظة</p>
                      <p className="mt-1 text-xs text-on-surface-variant">{cartCourses.length} عناصر جاهزة للشراء</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-4xl bg-white p-8 shadow-[0_24px_64px_-44px_rgba(28,25,45,0.2)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-black text-on-surface">متابعة الدورات</h2>
                  <Link className="text-sm font-bold text-primary hover:underline" to={routes.watch.path}>
                    عرض المشاهدة
                  </Link>
                </div>

                {activeCourses.length ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {activeCourses.map((course) => (
                      <div key={course.id} className="rounded-3xl border border-surface-container bg-surface-container-lowest p-5">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-surface-container">
                            <img alt={course.title} className="h-full w-full object-cover" src={course.image} />
                          </div>
                          <div className="relative flex h-14 w-14 items-center justify-center">
                            <svg className="h-full w-full -rotate-90">
                              <circle
                                className="text-surface-container"
                                cx={28}
                                cy={28}
                                fill="transparent"
                                r={23}
                                stroke="currentColor"
                                strokeWidth={4}
                              />
                              <circle
                                className={course.accentClass}
                                cx={28}
                                cy={28}
                                fill="transparent"
                                r={23}
                                stroke="currentColor"
                                strokeDasharray="144.5"
                                strokeDashoffset={course.ringOffset}
                                strokeWidth={4}
                              />
                            </svg>
                            <span className="absolute text-[11px] font-bold">{course.progress}%</span>
                          </div>
                        </div>

                        <h3 className="text-right font-bold text-on-surface">{course.title}</h3>
                        <p className="mt-2 text-right text-xs leading-6 text-on-surface-variant">
                          أكملت {course.completedLessons} من أصل {course.lessons} دروس.
                        </p>
                        <p className="mt-2 text-right text-xs leading-6 text-on-surface-variant">
                          الدرس القادم: {course.nextLesson}
                        </p>

                        <Link
                          to={routes.watch.path}
                          className={`mt-5 flex justify-center rounded-2xl px-4 py-3 text-sm font-bold transition hover:opacity-90 ${course.buttonClass}`}
                        >
                          متابعة الدرس
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-3xl bg-surface-container-low p-8 text-center">
                    <p className="text-on-surface-variant">لا توجد دورات ملتحق بها حتى الآن.</p>
                  </div>
                )}
              </section>
            </div>

            <div className="space-y-8">
              <section className="rounded-4xl bg-white p-6 shadow-[0_24px_64px_-44px_rgba(28,25,45,0.2)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-black text-on-surface">شوهد مؤخراً</h2>
                  <span className="text-xs text-on-surface-variant">من بياناتك الحالية</span>
                </div>

                {recentItems.length ? (
                  <div className="space-y-5">
                    {recentItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-container">
                          <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                        </div>
                        <div className="min-w-0 flex-1 text-right">
                          <p className="truncate text-sm font-bold text-on-surface">{item.title}</p>
                          <p className="mt-1 text-[11px] text-on-surface-variant">{item.course}</p>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-container">
                            <div className={`h-full ${item.accentClass}`} style={{ width: item.progressWidth }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-on-surface-variant">لن تظهر العناصر هنا حتى تبدأ التفاعل مع المنصة.</p>
                )}
              </section>

              <section className="rounded-4xl bg-white p-6 shadow-[0_24px_64px_-44px_rgba(28,25,45,0.2)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-black text-on-surface">التنبيهات</h2>
                  <span className="rounded-full bg-tertiary-fixed px-2.5 py-1 text-[10px] font-bold text-on-tertiary-fixed">
                    {notificationItems.length} جديد
                  </span>
                </div>

                <div className="space-y-5">
                  {notificationItems.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`} />
                      <div className="text-right">
                        <p className="text-sm font-bold text-on-surface">{item.title}</p>
                        <p className="mt-1 text-xs leading-6 text-on-surface-variant">{item.body}</p>
                        <p className="mt-1 text-[11px] text-primary/70">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-4xl border border-primary/10 bg-linear-to-br from-primary/6 via-white to-secondary/8 p-6 shadow-[0_24px_64px_-44px_rgba(66,40,173,0.2)]">
                <div className="mb-4">
                  <BrandLogo className="h-14 w-auto object-contain" />
                </div>
                <h2 className="text-lg font-black text-on-surface">خطة الحساب الحالية</h2>
                <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                  لديك {enrolledCourses.length} دورات نشطة و {cartCourses.length} عناصر في السلة. استمر في التقدم
                  لتحويل نشاطك الحالي إلى شهادات وإنجازات.
                </p>
                <Link
                  to={routes.courses.path}
                  className="mt-5 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  استكشاف المزيد من الدورات
                </Link>
              </section>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
