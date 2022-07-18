import { getBrandsTerms, getStyles, getTerms } from 'shared/api';
import { getErrorMessage } from 'shared/helpers';

import type { AppDispatch } from '../types';
import { entitiesSlice } from './slice';

const {
  fetchTermsStarted,
  termsFetched,
  fetchTermsFailed,
  fetchBrandsTermsStarted,
  brandsTermsFetched,
  fetchStylesFailed,
  fetchStylesStarted,
  stylesFetched,
  fetchBrandsTermsFailed,
} = entitiesSlice.actions;

export const fetchTerms = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchTermsStarted());

    const {
      data: { data: terms },
    } = await getTerms();

    dispatch(termsFetched(terms));
  } catch (error: unknown) {
    dispatch(fetchTermsFailed(getErrorMessage(error)));
  }
};

export const fetchBrandsTerms = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchBrandsTermsStarted());

    const {
      data: { data: brandsTerms },
    } = await getBrandsTerms();

    dispatch(brandsTermsFetched(brandsTerms));
  } catch (error: unknown) {
    dispatch(fetchBrandsTermsFailed(getErrorMessage(error)));
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
