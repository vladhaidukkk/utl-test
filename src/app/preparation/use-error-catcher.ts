import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import {
  selectStylesEntity,
  selectServicesEntity,
  selectBrandsEntity,
  useAppSelector,
} from 'shared/store';

export const useErrorCatcher = () => {
  const { error: servicesError } = useAppSelector(selectServicesEntity);
  const { error: brandsError } = useAppSelector(selectBrandsEntity);
  const { error: stylesError } = useAppSelector(selectStylesEntity);

  const deps = useMemo(() => {
    return [servicesError, brandsError, stylesError];
  }, [servicesError, brandsError, stylesError]);

  useEffect(() => {
    const errors = deps.filter((error) => error);

    errors.forEach((error) => toast.error(error));
  }, deps);

  return null;
};
