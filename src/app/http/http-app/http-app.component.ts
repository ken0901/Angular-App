import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-app',
  templateUrl: './http-app.component.html',
  styleUrls: ['./http-app.component.css']
})
export class HttpAppComponent implements OnInit {
  loadedPosts = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePost(postData: {title: string; content: string}){
    // send HTTP request
  }

  onFetchPosts(){

  }


  onClearPosts(){
    
  }
}
