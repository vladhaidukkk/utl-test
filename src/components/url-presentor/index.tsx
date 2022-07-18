import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Entities } from 'shared/api';
import { getUrlParams } from 'shared/helpers';

export const UrlPresentor = () => {
  const { pathname } = useLocation();

  const urlParams = useMemo(() => {
    return getUrlParams(pathname);
  }, [pathname]);

  return (
    <div className="flex gap-4">
      {urlParams[Entities.Services] && (
        <p className="rounded border border-sky-300 bg-sky-200 px-2 py-1 text-sm text-slate-800 shadow-md">
          Service:{' '}
          <span className="underline decoration-sky-400">{urlParams[Entities.Services]}</span>
        </p>
      )}
      {urlParams[Entities.Brands] && (
        <p className="rounded border border-blue-300 bg-blue-200 px-2 py-1 text-sm text-slate-800 shadow-md">
          Brand: <span className="underline decoration-blue-400">{urlParams[Entities.Brands]}</span>
        </p>
      )}
      {urlParams[Entities.Styles] && (
        <p className="rounded border border-indigo-300 bg-indigo-200 px-2 py-1 text-sm text-slate-800 shadow-md">
          Style:{' '}
          <span className="underline decoration-indigo-400">{urlParams[Entities.Styles]}</span>
        </p>
      )}
    </div>
  );
};
