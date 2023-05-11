import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class DataService {
    getDetail(){
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
        });
        return resultPromise;
    }
}