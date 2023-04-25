import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-http-app',
  templateUrl: './http-app.component.html',
  styleUrls: ['./http-app.component.css']
})
export class HttpAppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post){
    // send HTTP request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts(){
    // Send Http Request
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }


  onClearPosts(){
    // Send Http Request
    this.postsService.deletePosts().subscribe(() =>{
      this.loadedPosts = [];
    });
  }
}
