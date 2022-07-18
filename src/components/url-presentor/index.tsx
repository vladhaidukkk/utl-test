import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ExclamationIcon } from '@heroicons/react/solid';

import { EntitiesLabels } from 'shared/api';
import { getUrlParams } from 'shared/helpers';
import { fetchActive, selectActiveEntities, useAppDispatch, useAppSelector } from 'shared/store';
import { Loader } from 'shared/uikit';

export const UrlPresentor = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { isLoading, service, brand, style, error } = useAppSelector(selectActiveEntities);

  useEffect(() => {
    const urlParams = getUrlParams(pathname);
    const hasParams = Object.values(urlParams).filter((param) => param).length > 0;

    if (hasParams)
      dispatch(
        fetchActive({
          service_slug: urlParams[EntitiesLabels.Services],
          brand_slug: urlParams[EntitiesLabels.Brands],
          style_slug: urlParams[EntitiesLabels.Styles],
        })
      );
  }, [pathname]);

  if (error) {
    return (
      <div className="flex items-center gap-2 rounded border border-red-300 bg-red-200 px-2 py-1 text-sm text-red-800 shadow-md">
        <ExclamationIcon className="h-5" />
        {error}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {service && (
        <p className="rounded border border-sky-300 bg-sky-200 px-2 py-1 text-sm text-slate-700 text-slate-800 shadow-md">
          Service:{' '}
          <span className="text-slate-800 underline decoration-sky-400">{service.label}</span>
        </p>
      )}
      {brand && (
        <p className="rounded border border-blue-300 bg-blue-200 px-2 py-1 text-sm text-slate-700 shadow-md">
          Brand: <span className="text-slate-800 underline decoration-blue-400">{brand.label}</span>
        </p>
      )}
      {style && (
        <p className="rounded border border-indigo-300 bg-indigo-200 px-2 py-1 text-sm text-slate-700 shadow-md">
          Style:{' '}
          <span className="text-slate-800 underline decoration-indigo-400">{style.label}</span>
        </p>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
