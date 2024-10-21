'use client'
import { useEffect, useState } from 'react';
import HistoryPage from "@/components/HistoryPage";
import LandingPage from '@/components/LandingPage';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative min-h-[200vh]'>
      <LandingPage />
      <HistoryPage isVisible={isVisible} />
    </div>
  );
}
