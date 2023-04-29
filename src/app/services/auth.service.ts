import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "../auth/auth/user.model";

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
    user = new Subject<User>();

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
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData);
        }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(this.baseUrl + this.signInUrl + this.API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true  
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData);
        }));
    }

    private handleAuthentication(resData){
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(resData.email, resData.userId, resData.token, expirationDate);
        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occurred!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exists.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
    }
}