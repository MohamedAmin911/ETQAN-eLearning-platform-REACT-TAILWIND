import { Navigate, Route, Routes } from 'react-router-dom'
import { AllCoursesPage } from './pages/AllCoursesPage/AllCoursesPage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { CourseDetailsPage } from './pages/CourseDetailsPage/CourseDetailsPage'
import { CourseWatchPage } from './pages/CourseWatchPage/CourseWatchPage'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { HomePage } from './pages/HomePage/HomePage'
import { InstructorsPage } from './pages/InstructorsPage/InstructorsPage'
import { InstructorProfilePage } from './pages/InstructorProfilePage/InstructorProfilePage'
import { SignInPage } from './pages/SignInPage/SignInPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'
import { routes } from './siteData'

function App() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<HomePage />} />
      <Route path={routes.courses.path} element={<AllCoursesPage />} />
      <Route path={routes.courseDetails.path} element={<CourseDetailsPage />} />
      <Route path={routes.watch.path} element={<CourseWatchPage />} />
      <Route path={routes.instructor.path} element={<InstructorsPage />} />
      <Route path={`${routes.instructor.path}/:instructorId`} element={<InstructorProfilePage />} />
      <Route path={routes.dashboard.path} element={<DashboardPage />} />
      <Route path={routes.checkout.path} element={<CheckoutPage />} />
      <Route path={routes.signIn.path} element={<SignInPage />} />
      <Route path={routes.signUp.path} element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
