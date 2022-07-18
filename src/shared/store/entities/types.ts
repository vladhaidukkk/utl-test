import type { IBrandTerm, IStyle, ITerm } from 'shared/api';

interface IEntityState<T> {
  isLoading: boolean;
  data: T[];
  error: string | null;
}

export interface IEntitiesInitialState {
  terms: IEntityState<ITerm>;
  brandsTerms: IEntityState<IBrandTerm>;
  styles: IEntityState<IStyle>;
}
