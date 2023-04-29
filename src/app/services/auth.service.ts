import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}
    
    API_KEY = '';
    baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    signUpUrl = 'signUp?key='
    signInUrl= 'signInWithPassword?key=';

    signUp(email: string, password: string){
        return this.http.post<AuthResponseData>(this.baseUrl + this.signUpUrl + this.API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true    
            }
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(this.baseUrl + this.signInUrl + this.API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true  
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occurred!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
        }
        return throwError(errorMessage);
    }
}