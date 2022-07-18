export interface IEntity {
  id: number;
  label: string;
  slug: string;
}

export enum Entities {
  Services = 'services',
  Brands = 'brands',
  Styles = 'styles',
}
