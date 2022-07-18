import { Entities } from 'shared/api';

export const generateUrl = (url: string, label: Entities, slug: string) => {
  const parts = url.split('/');

  const serviceParam = parts.find((part) => part.includes('s-')) ?? '';
  const brandParam = parts.find((part) => part.includes('b-')) ?? '';
  const styleParam = parts.find((part) => part.includes('st-')) ?? '';

  switch (label) {
    case Entities.Services:
      return `/${[!serviceParam.includes(slug) ? `s-${slug}` : '', brandParam, styleParam]
        .filter((part) => part)
        .join('/')}`;
    case Entities.Brands:
      return `/${[serviceParam, !brandParam.includes(slug) ? `b-${slug}` : '', styleParam]
        .filter((part) => part)
        .join('/')}`;
    case Entities.Styles:
      return `/${[serviceParam, brandParam, !styleParam.includes(slug) ? `st-${slug}` : '']
        .filter((part) => part)
        .join('/')}`;
    default:
      return '/';
  }
};
