import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  actions = [];
  constructor(private userService: UserService) {
    this.userService.getTodolist().subscribe((toDolist) => {
      console.log(toDolist);
       this.actions = toDolist
       
    });
  }
}
