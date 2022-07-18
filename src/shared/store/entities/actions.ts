import { getServices, getBrands, getStyles, IGetActiveParams, getActive } from 'shared/api';

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
  fetchActiveStarted,
  activeFetched,
  fetchActiveFailed,
} = entitiesSlice.actions;

export const fetchServices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchServicesStarted());

    const {
      data: { data: services },
    } = await getServices();

    dispatch(servicesFetched(services));
  } catch {
    dispatch(fetchServicesFailed('Failed to fetch Services'));
  }
};

export const fetchBrands = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchBrandsStarted());

    const {
      data: { data: brands },
    } = await getBrands();

    dispatch(brandsFetched(brands));
  } catch (error: unknown) {
    dispatch(fetchBrandsFailed('Failed to fetch Brands'));
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
    dispatch(fetchStylesFailed('Failed to fetch Styles'));
  }
};

export const fetchActive = (params: IGetActiveParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchActiveStarted());

    const { data } = await getActive(params);

    dispatch(activeFetched(data));
  } catch {
    dispatch(fetchActiveFailed('Failed to fetch active terms'));
  }
};
