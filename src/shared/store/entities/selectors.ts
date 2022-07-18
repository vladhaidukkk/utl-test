import type { RootState } from '../types';

export const selectTermsEntity = (state: RootState) => {
  return state.entities.terms;
};

export const selectBrandsTermsEntity = (state: RootState) => {
  return state.entities.brandsTerms;
};

export const selectStylesEntity = (state: RootState) => {
  return state.entities.styles;
};
