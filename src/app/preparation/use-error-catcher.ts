import { useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  selectTermsEntity,
  selectBrandsTermsEntity,
  selectStylesEntity,
  useAppSelector,
} from 'shared/store';

export const useErrorCatcher = () => {
  const { error: termsError } = useAppSelector(selectTermsEntity);
  const { error: brandsTermsError } = useAppSelector(selectBrandsTermsEntity);
  const { error: stylesError } = useAppSelector(selectStylesEntity);

  useEffect(() => {
    const errors = [termsError, brandsTermsError, stylesError].filter((error) => error);

    errors.forEach((error) => toast.error(error));
  }, [termsError, brandsTermsError, stylesError]);

  return null;
};
