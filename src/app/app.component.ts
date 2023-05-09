import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoggingService } from './services/logging.service';
import { trigger, state, style } from '@angular/animations';

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
        transForm: 'translateX(100px)'
      }))
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
  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
  onAdd(item) {
    this.list.push(item);
  }
  onShrink() {
  }
  onAnimate() {
  }
  
}
