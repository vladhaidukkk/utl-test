import type { AxiosResponse } from 'axios';

import { api } from '../api';
import type { IGetActiveParams, IEntity } from './types';

export const getServices = (): Promise<AxiosResponse<{ data: IEntity[] }>> => {
  return api.get('/search/terms');
};

export const getBrands = (): Promise<AxiosResponse<{ data: IEntity[] }>> => {
  return api.get('/search/brands_terms');
};

export const getStyles = (): Promise<AxiosResponse<{ data: IEntity[] }>> => {
  return api.get('/search/styles');
};

export const getActive = (
  params: IGetActiveParams
): Promise<
  AxiosResponse<{ service: IEntity | null; brand: IEntity | null; style: IEntity | null }>
> => {
  return api.get('/search/parse_link', { params });
};
