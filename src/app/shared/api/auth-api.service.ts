import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {appSettings} from "../../core/CONSTANTS";
import {AuthInterface} from "../interfaces/auth.interface";

@Injectable()
export class AuthApiService {
    private apiUrl = appSettings.apiUrl;

    constructor(
        private http: HttpClient,
    ) {}

    public register(data: any): Observable<AuthInterface> {
        return this.http.post<AuthInterface>(this.apiUrl + '/auth/register', data);
    }

    public login(data: any): Observable<AuthInterface> {
        return this.http.post<AuthInterface>(this.apiUrl + '/auth/login', data);
    }
}
