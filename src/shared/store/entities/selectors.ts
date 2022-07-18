import type { RootState } from '../types';

export const selectServicesEntity = (state: RootState) => {
  return state.entities.services;
};

export const selectBrandsEntity = (state: RootState) => {
  return state.entities.brands;
};

export const selectStylesEntity = (state: RootState) => {
  return state.entities.styles;
};

export const selectActiveEntities = (state: RootState) => {
  return state.entities.active;
};
