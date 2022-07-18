import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<h1 className="flex h-full w-full items-center justify-center">Loading</h1>}
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );
};
