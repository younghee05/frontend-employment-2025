import { ReactNode } from 'react';

interface SignLayoutProps {
    children: ReactNode;
}

export default function SignLayout({ children }: SignLayoutProps) {
    return (
        <div>
            <h1>Group2레이아웃입니다</h1>
            {children} 
        </div>
    );
}
