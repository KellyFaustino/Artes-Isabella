'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    setIsDark(prefersDark)

    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="hidden sm:block cursor-pointer" onClick={toggleTheme}>
      {isDark ? (
        <SunIcon className="h-8 text-gray-100" />
      ) : (
        <MoonIcon className="h-8 text-gray-100" />
      )}
    </div>
  )
}

export default ToggleTheme
