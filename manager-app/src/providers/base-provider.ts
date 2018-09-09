import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class BaseProvider {

    constructor(public http: HttpClient,
        public _storage: Storage) {
    }

    //url: String = "http://localhost:8080/";
    url: String = "http://ec2-54-218-220-67.us-west-2.compute.amazonaws.com:8080/";

    private baseUrl: string = (location.hostname === "localhost") ? 'http://localhost:8080/' : 'http://app.com/api/';

    getToken() {
        return this._storage.get('token');
    }

}
