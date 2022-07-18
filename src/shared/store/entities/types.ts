import type { IEntity } from 'shared/api';

interface IEntityState {
  isLoading: boolean;
  data: IEntity[];
  error: string | null;
}

export interface IEntitiesInitialState {
  services: IEntityState;
  brands: IEntityState;
  styles: IEntityState;
  active: {
    isLoading: boolean;
    service: IEntity | null;
    brand: IEntity | null;
    style: IEntity | null;
    error: string | null;
  };
}
