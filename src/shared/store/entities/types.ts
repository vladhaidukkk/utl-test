import type { IService, IBrand, IStyle } from 'shared/api';

interface IEntityState<T> {
  isLoading: boolean;
  data: T[];
  error: string | null;
}

export interface IEntitiesInitialState {
  services: IEntityState<IService>;
  brands: IEntityState<IBrand>;
  styles: IEntityState<IStyle>;
}
