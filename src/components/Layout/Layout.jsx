import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutWrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
