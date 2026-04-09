import { LearningTopNav } from '../../../components/LearningTopNav'
import { PublicTopNav } from '../../../components/PublicTopNav'
import { usePageSetup } from '../../../hooks/usePageSetup'
import { useSiteNavigation } from '../../../hooks/useSiteNavigation'
import { CoursePlaylistSidebar } from './CoursePlaylistSidebar'
import { CourseVideoPlayer } from './CourseVideoPlayer'
import { CourseWatchContent } from './CourseWatchContent'

const pageStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}
body {
  font-family: 'Tajawal', sans-serif;
  background-color: #fdf8ff;
}
.glass-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.video-gradient {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
}`

export function CourseWatchPage() {
  usePageSetup('CourseWatchPage')
  const handleClick = useSiteNavigation()

  return (
    <>
      <style>{pageStyles}</style>
      <div onClick={handleClick}>
        <div>
          <PublicTopNav />
          <main className="flex h-screen mt-7 flex-row overflow-hidden pt-20">
            <CoursePlaylistSidebar />
            <section className="flex-1 overflow-y-auto bg-surface pb-12">
              <CourseVideoPlayer />
              <CourseWatchContent />
            </section>
          </main>
          <div className="fixed bottom-8 left-8 z-50">
            <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-2xl transition-transform hover:scale-110 active:scale-95">
              <span className="material-symbols-outlined text-3xl" data-icon="help_center">help_center</span>
              <span className="absolute right-full mr-4 whitespace-nowrap rounded-xl bg-on-surface px-4 py-2 text-sm text-surface opacity-0 transition-opacity group-hover:opacity-100">
                اسأل المحاضر
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
