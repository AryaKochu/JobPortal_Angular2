import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()

export class AppService {
    constructor(private http: Http) { }
    body: string = "";
    // private instance variable to hold base url
    //private baseUrl = 'http://www.mocky.io/v2/581dc2390f0000e91f02dadd';
    private baseUrl = './assets/api/jobDetails.json';

    private handleTimeOut(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Timeout...';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    extractData(res: any) {
        let response = res.json();
        return response;
    }
    // Fetch the job details
    getJobDetails(): Observable<any> {
        // ...using get request
        return this.http.get(this.baseUrl)      
            .timeout(60000, this.handleTimeOut)
            // ...and calling .json() on the response to return data
            .map(this.extractData)
            .catch(
            error => {
                throw error;
            });
    }



}