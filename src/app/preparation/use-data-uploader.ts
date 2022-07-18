import { useEffect } from 'react';

import { fetchTerms, fetchBrandsTerms, fetchStyles, useAppDispatch } from 'shared/store';

export const useDataUploader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTerms());
    dispatch(fetchBrandsTerms());
    dispatch(fetchStyles());
  }, []);

  return null;
};
