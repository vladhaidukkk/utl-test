import { useLocation, useNavigate } from 'react-router-dom';

import { DropdownList } from 'components';
import { EntitiesLabels } from 'shared/api';
import { generateUrl } from 'shared/helpers';
import { selectActiveEntities, selectServicesEntity, useAppSelector } from 'shared/store';

export const ServicesList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, isLoading, error } = useAppSelector(selectServicesEntity);
  const { service } = useAppSelector(selectActiveEntities);

  const handleSelect = (slug: string) => {
    navigate(generateUrl(pathname, EntitiesLabels.Services, slug));
  };

  const handleMatch = (slug: string) => {
    return service?.slug === slug;
  };

  return (
    <DropdownList
      label={EntitiesLabels.Services}
      data={data}
      isLoading={isLoading}
      error={error}
      onSelect={handleSelect}
      onMatch={handleMatch}
    />
  );
};
