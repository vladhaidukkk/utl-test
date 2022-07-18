import type { AxiosResponse } from 'axios';

import { api } from '../api';
import type { IService, IBrand, IStyle } from './types';

export const getServices = (): Promise<AxiosResponse<{ data: IService[] }>> => {
  return api.get('/search/terms');
};

export const getBrands = (): Promise<AxiosResponse<{ data: IBrand[] }>> => {
  return api.get('/search/brands_terms');
};

export const getStyles = (): Promise<AxiosResponse<{ data: IStyle[] }>> => {
  return api.get('/search/styles');
};
