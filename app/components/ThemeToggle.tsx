'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'var(--card-background)',
        borderColor: 'var(--card-border)',
        color: 'var(--accent-color)'
      }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 border"
      aria-label="테마 전환"
    >
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        {/* 밝은 테마 아이콘 (라이트 모드일 때 표시) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* 어두운 테마 아이콘 (다크 모드일 때 표시) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  )
} 