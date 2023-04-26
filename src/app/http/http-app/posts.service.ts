import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {

    baseUrl = 'https://angular-app-80c82-default-rtdb.firebaseio.com/posts.json';
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string) {
      const postData: Post = {title: title, content: content};
      this.http
        .post<{ name: string }>
          (this.baseUrl, 
            postData,
            {
              observe: 'response'
            }  
          )
            .subscribe(
              (responseData) => {
                console.log(responseData);
              }, error =>{
                this.error.next(error.message);
              }
            );
    }

    fetchPosts(){
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print', 'pretty');
      searchParams = searchParams.append('custom', 'key');

      return this.http.get<{[key: string]: Post}>
        (this.baseUrl,
          {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello'}),
            params: searchParams,
            responseType: 'json'
          }
        )
        .pipe(
          map((responseData) => {
            const postsArray: Post[] = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key], id: key});
              }
            }
            return postsArray;
          }
        ),
          catchError(errorRes => {
            // Send to analytics server
            return throwError(errorRes);
          })
        );
    }

    deletePosts(){
      return this.http.delete(this.baseUrl,
          {
            observe: 'events',
            responseType: 'text'
          }
        ).pipe(
          tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Sent){
              console.log(event.type);
            }
            if(event.type === HttpEventType.Response){
              console.log(event.body);
            }
          })
        );
    }
}
