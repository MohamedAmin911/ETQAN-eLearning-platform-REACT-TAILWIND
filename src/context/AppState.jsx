import { useEffect, useMemo, useState } from 'react'
import { AppStateContext } from './AppStateContext'
import { courses } from '../data/courses'

const STORAGE_KEY = 'fluid-scholar-state'

const defaultUser = {
  name: 'سارة محمود',
  email: 'student@fluidscholar.app',
}

const defaultState = {
  authUser: null,
  cartIds: ['marketing-2024'],
  wishlistIds: ['ux-advanced'],
  enrolledIds: ['react-modern'],
  notifications: 3,
}

function readStoredState() {
  if (typeof window === 'undefined') {
    return defaultState
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return defaultState
    }

    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function AppStateProvider({ children }) {
  const [state, setState] = useState(readStoredState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo(() => {
    const cartCourses = courses.filter((course) => state.cartIds.includes(course.id))
    const wishlistCourses = courses.filter((course) => state.wishlistIds.includes(course.id))
    const enrolledCourses = courses.filter((course) => state.enrolledIds.includes(course.id))
    const cartTotal = cartCourses.reduce((sum, course) => sum + course.price, 0)

    return {
      courses,
      authUser: state.authUser,
      cartIds: state.cartIds,
      wishlistIds: state.wishlistIds,
      enrolledIds: state.enrolledIds,
      notifications: state.notifications,
      cartCourses,
      wishlistCourses,
      enrolledCourses,
      cartCount: cartCourses.length,
      wishlistCount: wishlistCourses.length,
      cartTotal,
      signIn(email) {
        setState((current) => ({
          ...current,
          authUser: {
            ...defaultUser,
            email,
          },
        }))
      },
      signUp({ name, email }) {
        setState((current) => ({
          ...current,
          authUser: {
            name,
            email,
          },
        }))
      },
      signOut() {
        setState((current) => ({
          ...current,
          authUser: null,
        }))
      },
      toggleWishlist(courseId) {
        setState((current) => {
          const exists = current.wishlistIds.includes(courseId)

          return {
            ...current,
            wishlistIds: exists
              ? current.wishlistIds.filter((id) => id !== courseId)
              : [...current.wishlistIds, courseId],
          }
        })
      },
      addToCart(courseId) {
        setState((current) => {
          if (current.cartIds.includes(courseId)) {
            return current
          }

          return {
            ...current,
            cartIds: [...current.cartIds, courseId],
          }
        })
      },
      removeFromCart(courseId) {
        setState((current) => ({
          ...current,
          cartIds: current.cartIds.filter((id) => id !== courseId),
        }))
      },
      enrollCourse(courseId) {
        setState((current) => ({
          ...current,
          enrolledIds: current.enrolledIds.includes(courseId)
            ? current.enrolledIds
            : [...current.enrolledIds, courseId],
          cartIds: current.cartIds.filter((id) => id !== courseId),
        }))
      },
    }
  }, [state])

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}
