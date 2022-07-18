import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IBrandTerm, IStyle, ITerm } from 'shared/api';

import type { IEntitiesInitialState } from './types';

const initialState: IEntitiesInitialState = {
  terms: {
    isLoading: true,
    data: [],
    error: null,
  },
  brandsTerms: {
    isLoading: true,
    data: [],
    error: null,
  },
  styles: {
    isLoading: true,
    data: [],
    error: null,
  },
};

export const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    fetchTermsStarted: (state) => {
      state.terms.isLoading = true;
      state.terms.error = null;
    },
    termsFetched: (state, action: PayloadAction<ITerm[]>) => {
      state.terms.data = action.payload;
      state.terms.isLoading = false;
    },
    fetchTermsFailed: (state, action: PayloadAction<string>) => {
      state.terms.error = action.payload;
      state.terms.isLoading = false;
    },
    fetchBrandsTermsStarted: (state) => {
      state.brandsTerms.isLoading = true;
      state.brandsTerms.error = null;
    },
    brandsTermsFetched: (state, action: PayloadAction<IBrandTerm[]>) => {
      state.brandsTerms.data = action.payload;
      state.brandsTerms.isLoading = false;
    },
    fetchBrandsTermsFailed: (state, action: PayloadAction<string>) => {
      state.brandsTerms.error = action.payload;
      state.brandsTerms.isLoading = false;
    },
    fetchStylesStarted: (state) => {
      state.styles.isLoading = true;
      state.styles.error = null;
    },
    stylesFetched: (state, action: PayloadAction<IStyle[]>) => {
      state.styles.data = action.payload;
      state.styles.isLoading = false;
    },
    fetchStylesFailed: (state, action: PayloadAction<string>) => {
      state.styles.error = action.payload;
      state.styles.isLoading = false;
    },
  },
});

export const entitiesReducer = entitiesSlice.reducer;
