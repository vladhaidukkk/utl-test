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
}
