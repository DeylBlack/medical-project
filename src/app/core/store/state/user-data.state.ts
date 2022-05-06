import {UserDataInterface} from "../../../shared/interfaces/user-data.interface";
import {AuthInterface} from "../../../shared/interfaces/auth.interface";

export interface IUserDataState {
    userData: UserDataInterface;
    isLoading: boolean;
    error: any;
}

export const initialUserDataState: IUserDataState = {
    // @ts-ignore
    userData: null,
    isLoading: false,
    error: null,
}
