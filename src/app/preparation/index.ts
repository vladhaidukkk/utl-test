import { useDataUploader } from './use-data-uploader';
import { useErrorCatcher } from './use-error-catcher';

export const AppPreparation = () => {
  useDataUploader();
  useErrorCatcher();

  return null;
};
