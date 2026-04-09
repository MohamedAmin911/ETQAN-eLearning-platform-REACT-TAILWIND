export function CourseVideoPlayer() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-on-surface">
      <img alt="خلفية الدرس" className="h-full w-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIf1qxAD2kHfWDBIV6Hp4LfDOuYCojak4G_iFeX70Dyl1qWy3ZYrg6tCINCW_R3Jh2ZiaNyTeIJ_t1RNBRA7LPmpeybNcs32o3gJP74GQgmKMi7zpmecI3MnNenC5tgxKnEeCtPj4Y1NBaN7RrU01BY63PaLTGpr9UKUAKm0vvIF-Nsyzph6ylEuAwjPOCLXFyABhfMyGeYmhcqGEWkXTw1cECRLV9unZZOxvMjwlptL9kATpEIUeqWOzfUS_QXj3649mxX7wRxmr_" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-on-primary shadow-2xl transition-transform hover:scale-110">
          <span className="material-symbols-outlined text-5xl" data-icon="play_arrow" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
        </button>
      </div>
      <div className="video-gradient absolute bottom-0 flex w-full flex-row-reverse items-end justify-between p-6">
        <div className="flex flex-row-reverse gap-4">
          <button className="text-white transition-colors hover:text-primary-fixed"><span className="material-symbols-outlined" data-icon="settings">settings</span></button>
          <button className="text-white transition-colors hover:text-primary-fixed"><span className="material-symbols-outlined" data-icon="fullscreen">fullscreen</span></button>
        </div>
        <div className="relative mx-8 h-1.5 flex-1 overflow-hidden rounded-full bg-white/20">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-primary" />
        </div>
        <div className="font-['Plus_Jakarta_Sans'] text-sm text-white">03:14 / 08:45</div>
      </div>
    </div>
  )
}
