import { useEffect } from 'react';

import { fetchServices, fetchBrands, fetchStyles, useAppDispatch } from 'shared/store';

export const useDataUploader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchBrands());
    dispatch(fetchStyles());
  }, []);

  return null;
};
