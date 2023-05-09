import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoggingService } from './services/logging.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
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
      transition('shrunken <=> *', animate(500))
    ])
  ]
})
export class AppComponent implements OnInit{
  
  constructor(private authService: AuthService,
    private loggingService: LoggingService){}
    
    ngOnInit(): void {
      this.authService.autoLogin();
      this.loggingService.printLog('Hello From AppComponent ngOnInit');
    }
  
  // Angular Animation project
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';
  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
  onAdd(item: string) {
    this.list.push(item);
  }
  onShrink() {
    this.wildState = 'shrunken';
  }
  onAnimate() {
    this.state == 'normal' ? this.state='highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState='highlighted' : this.wildState = 'normal';
  }
  
}
