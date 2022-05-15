import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {appSettings} from "../../core/CONSTANTS";
import {AuthInterface} from "../interfaces/auth.interface";
import {UserDataInterface} from "../interfaces/user-data.interface";

@Injectable()
export class AuthApiService {
    private apiUrl = appSettings.apiUrl;

    constructor(
        private http: HttpClient,
    ) {}

    public register(data: any): Observable<void> {
        return this.http.post<void>(this.apiUrl + '/auth/register', data);
    }

    public login(data: any): Observable<UserDataInterface> {
        return this.http.post<UserDataInterface>(this.apiUrl + '/auth/login', data);
    }
}
