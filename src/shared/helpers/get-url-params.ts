import { EntitiesLabels } from 'shared/api';

export const getUrlParams = (url: string) => {
  const parts = url.split('/');

  const serviceParam = parts.find((part) => part.includes('s-'));
  const brandParam = parts.find((part) => part.includes('b-'));
  const styleParam = parts.find((part) => part.includes('st-'));

  return {
    [EntitiesLabels.Services]: serviceParam ? serviceParam.slice(2) : undefined,
    [EntitiesLabels.Brands]: brandParam ? brandParam.slice(2) : undefined,
    [EntitiesLabels.Styles]: styleParam ? styleParam.slice(3) : undefined,
  };
};
