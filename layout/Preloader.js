'use client';
import { ashuUtilit } from '@/utility';
import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    ashuUtilit.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
