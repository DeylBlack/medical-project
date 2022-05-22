import { IAppConfig } from '../../../shared/interfaces/app-config.interface';

export interface IAppConfigState {
  config: IAppConfig;
  isLoading: boolean;
}

export const initialAppConfigState: IAppConfigState = {
  // @ts-ignore
  config: null,
  isLoading: false,
};
