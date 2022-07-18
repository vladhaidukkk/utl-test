import type { AxiosResponse } from 'axios';

import { api } from '../api';
import type { IBrandTerm, IStyle, ITerm } from './types';

export const getTerms = (): Promise<AxiosResponse<{ data: ITerm[] }>> => {
  return api.get('/search/terms');
};

export const getBrandsTerms = (): Promise<AxiosResponse<{ data: IBrandTerm[] }>> => {
  return api.get('/search/brands_terms');
};

export const getStyles = (): Promise<AxiosResponse<{ data: IStyle[] }>> => {
  return api.get('/search/styles');
};
