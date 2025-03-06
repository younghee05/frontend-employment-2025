'use client';

import { create } from 'zustand';

// Zustand 상태 정의 인터페이스
interface AppState {
    isDarkMode: boolean;
    setDarkMode: (isDarkMode: boolean) => void;
}

// 로컬 스토리지 키
const localStorageKey = 'darkMode';

export const useZustand = create<AppState>((set) => {
    const setDarkMode = (isDarkMode: boolean) => {
        if (typeof window !== 'undefined') {
        localStorage.setItem(localStorageKey, String(isDarkMode)); // 상태 변경 시 `localStorage`에 값 저장
        }
        set({ isDarkMode });
    };

    return {
        isDarkMode: false, // 초기값은 false로 설정
        setDarkMode,
    };
});