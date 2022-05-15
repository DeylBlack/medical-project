import {createAction, props} from "@ngrx/store";

import {UserDataInterface} from "../../../shared/interfaces/user-data.interface";
import {AuthInterface} from "../../../shared/interfaces/auth.interface";

export const auth = createAction('[Login] Auth', props<{ data: AuthInterface }>());
export const authSuccess = createAction('[Login] Auth Success', props<{ data: UserDataInterface }>());
export const authNotSuccess = createAction('[Login] Auth Not Success', props<{error: any}>());

export const register = createAction('[Login] Register', props<{ data: AuthInterface }>());
export const registerSuccess = createAction('[Login] Register Success');
export const registerNotSuccess = createAction('[Login] Register Not Success', props<{error: any}>());
