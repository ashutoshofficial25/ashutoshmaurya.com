'use client';
import { ashuUtilit } from '@/utility';
import { Fragment, useEffect } from 'react';
const Cursor = () => {
  useEffect(() => {
    ashuUtilit.customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Cursor;
