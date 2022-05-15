import {createAction, props} from "@ngrx/store";
import {IAppConfig} from "../../../shared/interfaces/app-config.interface";

export const config = createAction('[Config] Get Config');
export const configSuccess = createAction('[Config] Get Config Success', props<{ appConfig: IAppConfig }>());
export const configNotSuccess = createAction('[Config] Get Config Not Success');