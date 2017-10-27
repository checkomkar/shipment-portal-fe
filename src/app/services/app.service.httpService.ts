import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private _http:Http) {}

    getDataObservable(url:string) {
        return this._http.get(url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working 
                // either remove it or add the line below (return ...)
                //console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }

    postDataObservable(url:string, body?:any, options?:any) {
        return this._http.post(url, body, options)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working 
                // either remove it or add the line below (return ...)
                //console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }
}

