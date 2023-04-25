import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from 'units/scrollToTop';

import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="/tweets" element={<TweetsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
