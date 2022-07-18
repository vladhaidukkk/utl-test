import { useLocation, useNavigate } from 'react-router-dom';

import { DropdownList } from 'components';
import { EntitiesLabels } from 'shared/api';
import { generateUrl } from 'shared/helpers';
import { selectActiveEntities, selectStylesEntity, useAppSelector } from 'shared/store';

export const StylesList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, isLoading, error } = useAppSelector(selectStylesEntity);
  const { style } = useAppSelector(selectActiveEntities);

  const handleSelect = (slug: string) => {
    navigate(generateUrl(pathname, EntitiesLabels.Styles, slug));
  };

  const handleMatch = (slug: string) => {
    return style?.slug === slug;
  };

  return (
    <DropdownList
      label={EntitiesLabels.Styles}
      data={data}
      isLoading={isLoading}
      error={error}
      onSelect={handleSelect}
      onMatch={handleMatch}
    />
  );
};
