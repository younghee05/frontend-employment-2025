import { ReactNode } from 'react';

interface PokemonsLayoutProps {
    children: ReactNode;
}

export default function PokemonsLayout({ children }: PokemonsLayoutProps) {
    return (
        <div>
            <h1>Group1레이아웃입니다</h1>
            {children} 
        </div>
    );
}
