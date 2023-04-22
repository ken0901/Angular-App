import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Component({
  selector: 'app-http-app',
  templateUrl: './http-app.component.html',
  styleUrls: ['./http-app.component.css']
})
export class HttpAppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  baseUrl = 'https://angular-app-80c82-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: {title: string; content: string}){
    // send HTTP request
    this.http.post<{name: string}>(this.baseUrl, postData)
        .subscribe(responseData =>{
          console.log(responseData);
    });
  }

  onFetchPosts(){
    // Send Http Request
    this.fetchPosts();
  }


  onClearPosts(){
    // Send Http Request
  }

  private fetchPosts(){
    this.isFetching = true;
    this.http.get<{[key: string]: Post}>(this.baseUrl)
        .pipe(
          map((responseData) => {
            const postsArray: Post[] = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key], id: key});
              }
            }
            return postsArray;
          }))
        .subscribe(posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
    })
  }  
}
