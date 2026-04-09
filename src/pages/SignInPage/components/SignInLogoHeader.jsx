import { BrandLogo } from '../../../components/BrandLogo'

export function SignInLogoHeader() {
  return (
    <div className="flex justify-start px-8 pt-8 md:px-16 lg:px-24">
      <BrandLogo className="h-16 w-auto object-contain sm:h-20" />
    </div>
  )
}
