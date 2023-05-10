import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoggingService } from './services/logging.service';
// import { Post } from './offline/post/post.model';
import { HttpClient } from '@angular/common/http';

// Animations
//import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Animations
  /*animations:[
    trigger('divState',[
      state('normal',style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
    ]),
    trigger('wildState',[
      state('normal',style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1',[
      state('in',style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *',[
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void',[
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2',[
      state('in',style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *',[
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void',[
        group([
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          })),
          animate(300, style({
            color: 'red'
          }))
        ])
      ])
    ]),
  ]*/
})
export class AppComponent implements OnInit{
  
  constructor(private authService: AuthService,
              private loggingService: LoggingService,
              private http: HttpClient){}
    
    ngOnInit(): void {
      this.authService.autoLogin();
      this.loggingService.printLog('Hello From AppComponent ngOnInit');

      // this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
      //   fetchedPosts => (
      //     this.posts = fetchedPosts
      //   )
      // );
    }
  

  // Offline Capabilities with Service workers
  // posts: Post[] = [];
  
  // Angular Animation project
  // list = ['Milk', 'Sugar', 'Bread'];
  // state = 'normal';
  // wildState = 'normal';
  // onDelete(item: string) {
  //   this.list.splice(this.list.indexOf(item), 1);
  // }
  // onAdd(item: string) {
  //   this.list.push(item);
  // }
  // onShrink() {
  //   this.wildState = 'shrunken';
  // }
  // onAnimate() {
  //   this.state == 'normal' ? this.state='highlighted' : this.state = 'normal';
  //   this.wildState == 'normal' ? this.wildState='highlighted' : this.wildState = 'normal';
  // }

  // animationStarted(event){
  //   console.log(event);
  // }

  // animationEnded(event){
  //   console.log(event);
  // }
  
}
