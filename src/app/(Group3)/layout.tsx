import { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div>
            <h1>Group3레이아웃입니다</h1>
            {children} 
        </div>
    );
}