import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}
    public getData(username: string) {
        console.log(username);
        return this.httpClient
            .get(`https://api.github.com/users/${username}`)
            .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        alert('user not found');
        return throwError(errorMessage);
    }
}
