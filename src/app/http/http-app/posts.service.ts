import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {

    baseUrl = 'https://angular-app-80c82-default-rtdb.firebaseio.com/posts.json';

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string) {
        
        const postData: Post = {title: title, content: content};
        this.http
        .post<{ name: string }>(this.baseUrl, postData)
        .subscribe((responseData) => {
            console.log(responseData);
        });
    }

    fetchPosts(){
        return this.http.get<{[key: string]: Post}>(this.baseUrl)
        .pipe(
          map((responseData) => {
            const postsArray: Post[] = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key], id: key});
              }
            }
            return postsArray;
          }));
    }

    deletePosts(){
        return this.http.delete(this.baseUrl);
    }
}
