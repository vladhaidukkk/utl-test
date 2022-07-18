import { useLocation, useNavigate } from 'react-router-dom';

import { DropdownList, UrlPresentor } from 'components';
import { Entities } from 'shared/api';
import { generateUrl, getUrlParams } from 'shared/helpers';
import {
  selectBrandsEntity,
  selectServicesEntity,
  selectStylesEntity,
  useAppSelector,
} from 'shared/store';

const MainPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    data: services,
    isLoading: isServicesLoading,
    error: servicesError,
  } = useAppSelector(selectServicesEntity);
  const {
    data: brands,
    isLoading: isBrandsLoading,
    error: brandsError,
  } = useAppSelector(selectBrandsEntity);
  const {
    data: styles,
    isLoading: isStylesLoading,
    error: stylesError,
  } = useAppSelector(selectStylesEntity);

  const handleSelect = (label: Entities, slug: string) => {
    navigate(generateUrl(pathname, label, slug));
  };

  const handleMatch = (label: Entities, slug: string) => {
    const urlParams = getUrlParams(pathname);
    return urlParams[label] === slug;
  };

  return (
    <div className="container mx-auto flex h-full flex-col gap-4 p-4">
      <UrlPresentor />
      <div className="flex flex-1 items-start gap-x-4 overflow-scroll">
        <DropdownList
          label={Entities.Services}
          data={services}
          isLoading={isServicesLoading}
          error={servicesError}
          onSelect={handleSelect}
          onMatch={handleMatch}
        />
        <DropdownList
          label={Entities.Brands}
          data={brands}
          isLoading={isBrandsLoading}
          error={brandsError}
          onSelect={handleSelect}
          onMatch={handleMatch}
        />
        <DropdownList
          label={Entities.Styles}
          data={styles}
          isLoading={isStylesLoading}
          error={stylesError}
          onSelect={handleSelect}
          onMatch={handleMatch}
        />
      </div>
    </div>
  );
};

export default MainPage;
