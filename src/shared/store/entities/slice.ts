import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IEntity } from 'shared/api';

import type { IEntitiesInitialState } from './types';

const initialState: IEntitiesInitialState = {
  services: {
    isLoading: true,
    data: [],
    error: null,
  },
  brands: {
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
    fetchServicesStarted: (state) => {
      state.services.isLoading = true;
      state.services.error = null;
    },
    servicesFetched: (state, action: PayloadAction<IEntity[]>) => {
      state.services.data = action.payload;
      state.services.isLoading = false;
    },
    fetchServicesFailed: (state, action: PayloadAction<string>) => {
      state.services.error = action.payload;
      state.services.isLoading = false;
    },
    fetchBrandsStarted: (state) => {
      state.brands.isLoading = true;
      state.brands.error = null;
    },
    brandsFetched: (state, action: PayloadAction<IEntity[]>) => {
      state.brands.data = action.payload;
      state.brands.isLoading = false;
    },
    fetchBrandsFailed: (state, action: PayloadAction<string>) => {
      state.brands.error = action.payload;
      state.brands.isLoading = false;
    },
    fetchStylesStarted: (state) => {
      state.styles.isLoading = true;
      state.styles.error = null;
    },
    stylesFetched: (state, action: PayloadAction<IEntity[]>) => {
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
