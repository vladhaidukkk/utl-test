import { useLocation, useNavigate } from 'react-router-dom';

import { DropdownList } from 'components';
import { EntitiesLabels } from 'shared/api';
import { generateUrl } from 'shared/helpers';
import { selectActiveEntities, selectBrandsEntity, useAppSelector } from 'shared/store';

export const BrandsList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, isLoading, error } = useAppSelector(selectBrandsEntity);
  const { brand } = useAppSelector(selectActiveEntities);

  const handleSelect = (slug: string) => {
    navigate(generateUrl(pathname, EntitiesLabels.Brands, slug));
  };

  const handleMatch = (slug: string) => {
    return brand?.slug === slug;
  };

  return (
    <DropdownList
      label={EntitiesLabels.Brands}
      data={data}
      isLoading={isLoading}
      error={error}
      onSelect={handleSelect}
      onMatch={handleMatch}
    />
  );
};
