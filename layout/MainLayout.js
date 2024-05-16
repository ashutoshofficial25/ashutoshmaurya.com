'use client';
import Popup from '@/components/popup/Popup';
import { ashuUtilit } from '@/utility';
import { Fragment, useEffect } from 'react';
import Audio from './Audio';
import CopyRight from './CopyRight';
import Cursor from './Cursor';
import Settings from './Settings';
const MainLayout = ({ children }) => {
  useEffect(() => {
    ashuUtilit.dataImage();
    ashuUtilit.imgToSVG();
    ashuUtilit.animation();
  }, []);

  return (
    <Fragment>
      <Popup />
      <div
        className="ashu_tm_all_wrap w-full h-auto clear-both float-left relative"
        data-magic-cursor="show"
      >
        {/* If you want disable magic cursor change value to "hide" */}
        {/* SETTINGS */}
        <Settings />
        {children}
        {/* COPYRIGHT */}
        <CopyRight />
        {/* /COPYRIGHT */}
        {/* AUDIO FOR CLICK */}
        <Audio />
        {/* /AUDIO FOR CLICK */}
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default MainLayout;
