export interface IEntity {
  id: number;
  label: string;
  slug: string;
}

export interface IGetActiveParams {
  service_slug?: string;
  brand_slug?: string;
  style_slug?: string;
}

export enum EntitiesLabels {
  Services = 'services',
  Brands = 'brands',
  Styles = 'styles',
}
