import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0]">
      <Navbar />
      <main className="pt-14 sm:pt-14">
        {children}
      </main>
    </div>
  );
}
