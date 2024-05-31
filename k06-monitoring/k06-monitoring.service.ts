import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../../trackntrace/config/webapi.config';
import { AlertMessageService } from '../../trackntrace/miscellaneous/alert-message/alert-message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

// message service 
@Injectable({
    providedIn: 'root'
})

export class MonitoringService {
    private apiUrl = API_CONFIG.endpoint; // url to web api
    private subject = new Subject<any>();
    constructor(private http: HttpClient,
        private alertMessageService: AlertMessageService
    ) { }

    saveFrameData(httpBody: any): Observable<any[]> {
        const apipath = this.apiUrl + "/k06monitoring";
        console.log(httpBody);
        return this.http.post<any>(apipath, httpBody, httpOptions)
            .pipe(
                tap(_ => {
                    this.log(`Data saved successfully..`, 'S');
                }),
                catchError(this.handleError(`Error in saving Data!..`, []))
            );
    };
   

    // logging message 
    private log(message: string, messageType: string) {
        this.alertMessageService.add(`HttpService: ${message}`, `${messageType}`);
    };

    //handle error of generic type
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`, 'E');
            this.log(`${operation}, url:${error.url} failed: ${error.error.message}`, 'E');
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    sendMessage(message: Boolean) {
        this.subject.next({ opened: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}