'use client';

import { useEffect, useState } from 'react';
import { useZustand } from '../Zustand/useZustand';

export default function CountComponent() {
    const [count, setCount] = useState(0);
    const { isDarkMode, setDarkMode } = useZustand();

    // count가 5 이상이면 다크모드, 5 미만이면 라이트모드
    useEffect(() => {
        // 로컬 스토리지에서 'darkMode' 값 읽어오기 (있다면)
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(storedDarkMode); // 다크모드 상태 초기화
    }, []); // 컴포넌트 마운트 시 한 번만 실행

    useEffect(() => {
        // count가 5 이상이면 다크모드, 5 미만이면 라이트모드
        if (count >= 5) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [count]); // count가 변경될 때마다 실행

    useEffect(() => {
        // 상태가 변경되면 로컬 스토리지에 다크모드 상태 저장
        localStorage.setItem('darkMode', String(isDarkMode));
    }, [isDarkMode]); // isDarkMode가 변경될 때마다 실행
    
    const handleIncrement = () => {
        if (count < 10) {
        setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    return (
        <div style={{ background: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
        <button onClick={handleIncrement}>증가</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>감소</button>
        </div>
    );
}