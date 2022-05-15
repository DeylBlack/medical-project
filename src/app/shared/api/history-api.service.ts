import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {appSettings} from "../../core/CONSTANTS";
import {IHistory} from "../interfaces/history.interface";

@Injectable()
export class HistoryApiService {
    private apiUrl = appSettings.apiUrl;

    constructor(
        private http: HttpClient,
    ) {}

    public getAllHistory(): Observable<Array<IHistory>> {
        return this.http.get<Array<IHistory>>(this.apiUrl + '/config/history');
    }

    public createHistoryItem(historyItem: IHistory): Observable<IHistory> {
      return this.http.post<IHistory>(this.apiUrl + '/config/history', historyItem);
    }
}
