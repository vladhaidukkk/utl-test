import { Entities } from 'shared/api';

export const getUrlParams = (url: string) => {
  const parts = url.split('/');

  const serviceParam = parts.find((part) => part.includes('s-'));
  const brandParam = parts.find((part) => part.includes('b-'));
  const styleParam = parts.find((part) => part.includes('st-'));

  return {
    [Entities.Services]: serviceParam ? serviceParam.slice(2) : null,
    [Entities.Brands]: brandParam ? brandParam.slice(2) : null,
    [Entities.Styles]: styleParam ? styleParam.slice(3) : null,
  };
};
