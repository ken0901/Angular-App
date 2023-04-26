import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-app',
  templateUrl: './http-app.component.html',
  styleUrls: ['./http-app.component.css']
})
export class HttpAppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe(
      errorMessage => {
        this.error = errorMessage;
      }
    );

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts =>{
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error =>{
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post){
    // send HTTP request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts(){
    // Send Http Request
    this.postsService.fetchPosts().subscribe(
      posts =>{
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error =>{
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }


  onClearPosts(){
    // Send Http Request
    this.postsService.deletePosts().subscribe(() =>{
      this.loadedPosts = [];
    });
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
