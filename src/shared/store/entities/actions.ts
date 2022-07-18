import { getServices, getBrands, getStyles } from 'shared/api';
import { getErrorMessage } from 'shared/helpers';

import type { AppDispatch } from '../types';
import { entitiesSlice } from './slice';

const {
  fetchServicesStarted,
  servicesFetched,
  fetchServicesFailed,
  fetchBrandsStarted,
  brandsFetched,
  fetchBrandsFailed,
  fetchStylesFailed,
  fetchStylesStarted,
  stylesFetched,
} = entitiesSlice.actions;

export const fetchServices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchServicesStarted());

    const {
      data: { data: terms },
    } = await getServices();

    dispatch(servicesFetched(terms));
  } catch (error: unknown) {
    dispatch(fetchServicesFailed(getErrorMessage(error)));
  }
};

export const fetchBrands = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchBrandsStarted());

    const {
      data: { data: brandsTerms },
    } = await getBrands();

    dispatch(brandsFetched(brandsTerms));
  } catch (error: unknown) {
    dispatch(fetchBrandsFailed(getErrorMessage(error)));
  }
};

export const fetchStyles = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStylesStarted());

    const {
      data: { data: styles },
    } = await getStyles();

    dispatch(stylesFetched(styles));
  } catch (error: unknown) {
    dispatch(fetchStylesFailed(getErrorMessage(error)));
  }
};
