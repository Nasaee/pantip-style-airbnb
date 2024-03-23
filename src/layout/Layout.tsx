import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import HeaderMobile from '../components/HeaderMobile';
import Rooms from '../components/Rooms';

const Layout = () => {
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (topHeaderRef.current) {
      setHeaderHeight(topHeaderRef.current?.offsetHeight);
    }
  }, []);

  return (
    <div className='font-thai text-gray-500'>
      <div ref={topHeaderRef} className='fixed top-0 left-0 right-0 bg-white'>
        <div className='border-2 border-slate-200'>
          <Header />
          <HeaderMobile />
        </div>
        <Rooms />
      </div>
      <main
        style={{ marginTop: `${headerHeight}px` }}
        className='flex min-h-screen'
      >
        <aside className='w-16'>sidebar menu</aside>
        <div className='flex-1'>
          <Outlet />
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
export default Layout;
