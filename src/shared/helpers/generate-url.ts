import { EntitiesLabels } from 'shared/api';

export const generateUrl = (url: string, label: EntitiesLabels, slug: string) => {
  const parts = url.split('/');

  const serviceParam = parts.find((part) => part.includes('s-')) ?? '';
  const brandParam = parts.find((part) => part.includes('b-')) ?? '';
  const styleParam = parts.find((part) => part.includes('st-')) ?? '';

  switch (label) {
    case EntitiesLabels.Services:
      return `/${[!serviceParam.includes(slug) ? `s-${slug}` : '', brandParam, styleParam]
        .filter((part) => part)
        .join('/')}`;
    case EntitiesLabels.Brands:
      return `/${[serviceParam, !brandParam.includes(slug) ? `b-${slug}` : '', styleParam]
        .filter((part) => part)
        .join('/')}`;
    case EntitiesLabels.Styles:
      return `/${[serviceParam, brandParam, !styleParam.includes(slug) ? `st-${slug}` : '']
        .filter((part) => part)
        .join('/')}`;
    default:
      return '/';
  }
};
