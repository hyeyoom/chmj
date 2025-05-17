'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [userChoseTheme, setUserChoseTheme] = useState<boolean>(false);
  
  // 테마 변경 함수
  const changeTheme = (newTheme: Theme, userSelected: boolean = true) => {
    setTheme(newTheme);
    
    if (userSelected) {
      setUserChoseTheme(true);
      localStorage.setItem('theme', newTheme);
    }
    
    // DOM에 테마 클래스 적용
    const root = document.documentElement;
    const oldTheme = newTheme === 'dark' ? 'light' : 'dark';
    
    root.classList.remove(oldTheme);
    root.classList.add(newTheme);
  };
  
  useEffect(() => {
    // 초기 테마 설정
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      changeTheme(storedTheme, false);
      setUserChoseTheme(true);
    } else {
      // 시스템 기본값 확인
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      changeTheme(systemTheme, false);
    }
    
    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // 사용자가 직접 테마를 선택하지 않은 경우에만 시스템 테마 변경을 반영
      if (!userChoseTheme) {
        changeTheme(e.matches ? 'dark' : 'light', false);
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [userChoseTheme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: (newTheme) => changeTheme(newTheme) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme은 ThemeProvider 내에서 사용해야 합니다');
  }
  return context;
} 