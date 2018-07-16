import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { BaseProvider } from './base-provider';

@Injectable()
export class TransitsProvider extends BaseProvider {

    constructor(public http: HttpClient,
        public _storage: Storage) {
        super(http, _storage);
    }

    private getAuthHeaders() {
        return Observable.fromPromise(this._storage.get('token'));
    }

    list(userId) {
        return this.getAuthHeaders().flatMap(api_token => {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                token: api_token,
            });

            let params = new HttpParams()
                .set('userId', userId)

            return this.http.get<any>(this.url + 'transits/list', { headers, params });
        });
    }

    countOfToday(userId) {

        return this.getAuthHeaders().flatMap(api_token => {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                token: api_token,
            });

            let params = new HttpParams()
                .set('userId', userId)

            return this.http.get<any>(this.url + 'transits/countOfToday', { headers, params });
        });
    }

    getAllByToday() {

        return this.getAuthHeaders().flatMap(api_token => {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                token: api_token,
            });
            
            return this.http.get<any>(this.url + 'transits/getallbytoday', { headers });
        });
    }
}
