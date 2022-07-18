import { UrlPresentor } from 'components';

import { BrandsList } from './brands-list';
import { ServicesList } from './services-list';
import { StylesList } from './styles-list';

const MainPage = () => {
  return (
    <div className="container mx-auto flex h-full flex-col gap-4 p-4">
      <UrlPresentor />
      <div className="flex flex-1 items-start gap-x-4 overflow-scroll">
        <ServicesList />
        <BrandsList />
        <StylesList />
      </div>
    </div>
  );
};

export default MainPage;
