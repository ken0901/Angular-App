import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: {name: string};
  isLoggedIn= false;
  data: string;

  constructor(private userService: UserService,
              private dataService: DataService){}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetail().then((data: string) => this.data = data);
  }
}
